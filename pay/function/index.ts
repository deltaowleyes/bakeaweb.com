/* bake-pay: Supabase Edge Function that turns an Interac e-Transfer email into a live website (pay/README.md).
   The Cloudflare Email Worker pay/worker/worker.js forwards every email to Leah's Gmail FIRST, then POSTs the raw
   email here when it looks like it came from Interac. Nothing here trusts the caller:
     1. DKIM: the email must carry a passing DKIM signature from interac.ca matching its From address (mailauth,
        DNS looked up over HTTPS). A faked "Interac" email can't publish anything.
     2. The pay code (BAKE-XXXX) must match an order from a prospect's preview link (pitch_orders).
     3. The money must say it was deposited (Autodeposit) and be at least the order's amount.
   Then the site is built here from the pitch saved in the database, with the studio's own builder loaded from
   https://bakeaweb.com/assets/site-builder.js (made by pay/bundle.mjs on every studio build, so it always matches),
   uploaded to Storage bucket "sites" at rezsite.com/<pagename>/ and recorded in published_sites, exactly like
   BAKER Admin's Publish. Every email is logged in bake_payments; anything that doesn't pass waits in BAKER Admin.
   POST ?selftest=1 checks DKIM and the parser with a made-up key (no data is touched). */
import { createClient } from 'npm:@supabase/supabase-js@2';
import { dkimVerify, dkimSign } from 'npm:mailauth@8';
import PostalMime from 'npm:postal-mime@2';
import { parseInterac, interacSigned } from './parse.js';
import { Buffer } from 'node:buffer';

/* The site builder, loaded from the live studio (refreshed every 10 minutes). */
const BUILDER_URL = 'https://bakeaweb.com/assets/site-builder.js';
let builder: any = null, builderAt = 0;
async function getBuilder() {
  if (builder && Date.now() - builderAt < 600_000) return builder;
  const r = await fetch(BUILDER_URL + '?t=' + Date.now(), { cache: 'no-store' });
  if (!r.ok) throw new Error('could not load the site builder (' + r.status + ')');
  builder = await import('data:text/javascript;charset=utf-8,' + encodeURIComponent(await r.text()));
  builderAt = Date.now();
  return builder;
}

const DOMAIN = 'rezsite.com';
const json = (o: unknown, status = 200) => new Response(JSON.stringify(o), { status, headers: { 'content-type': 'application/json' } });

/* DNS over HTTPS (Cloudflare), shaped like Node's dns.resolve() for mailauth. */
async function doh(name: string, type: string) {
  const r = await fetch('https://cloudflare-dns.com/dns-query?name=' + encodeURIComponent(name) + '&type=' + type, { headers: { accept: 'application/dns-json' } });
  const j = await r.json();
  const ans = (j.Answer || []).filter((a: any) => a.type == ({ TXT: 16, MX: 15, A: 1, AAAA: 28, CNAME: 5 } as any)[type]);
  if (!ans.length) { const e: any = new Error('No ' + type + ' for ' + name); e.code = j.Status == 3 ? 'ENOTFOUND' : 'ENODATA'; throw e; }
  if (type == 'TXT') return ans.map((a: any) => [String(a.data).replace(/^"|"$/g, '').replace(/"\s*"/g, '')]);
  if (type == 'MX') return ans.map((a: any) => { const [p, ex] = String(a.data).split(' '); return { priority: +p, exchange: ex.replace(/\.$/, '') }; });
  return ans.map((a: any) => String(a.data).replace(/\.$/, ''));
}

async function publish(sb: any, order: any) {
  const { data: p, error } = await sb.from('redesign_pitches').select('id,business_name,redesigns,base_project').eq('id', order.pitch_id).single();
  if (error || !p) throw new Error('pitch not found: ' + (error && error.message));
  const d = (p.redesigns || []).find((x: any) => x.name == order.design);
  if (!d) throw new Error('design "' + order.design + '" not in the pitch');
  const files = (await getBuilder()).buildPitchSite(d, p.base_project), dir = DOMAIN + '/' + order.pagename + '/';
  for (const f of files) {
    const { error: e } = await sb.storage.from('sites').upload(dir + f.path, new Blob([f.content], { type: 'text/html' }), { upsert: true, contentType: 'text/html; charset=utf-8', cacheControl: '60' });
    if (e) throw new Error('upload ' + f.path + ': ' + e.message);
  }
  const { data: old } = await sb.storage.from('sites').list(DOMAIN + '/' + order.pagename, { limit: 1000 });
  const keep = new Set(files.map((f: any) => f.path)), extra = (old || []).filter((o: any) => o.id && !keep.has(o.name)).map((o: any) => dir + o.name);
  if (extra.length) await sb.storage.from('sites').remove(extra);
  const { data: row, error: e2 } = await sb.from('published_sites').upsert({ domain: DOMAIN, pagename: order.pagename, tpl: d.tpl, files: files.map((f: any) => f.path),
    status: 'live', published_at: new Date().toISOString(), pitch_id: p.id, design: d.name, title: p.business_name }, { onConflict: 'domain,pagename' }).select().single();
  if (e2) throw new Error('published_sites: ' + e2.message);
  return row;
}

async function selftest() {
  const { privateKey, publicKey } = await crypto.subtle.generateKey({ name: 'RSASSA-PKCS1-v1_5', modulusLength: 2048, publicExponent: new Uint8Array([1, 0, 1]), hash: 'SHA-256' }, true, ['sign', 'verify']);
  const b64 = (buf: ArrayBuffer) => btoa(String.fromCharCode(...new Uint8Array(buf)));
  const pem = '-----BEGIN PRIVATE KEY-----\n' + b64(await crypto.subtle.exportKey('pkcs8', privateKey)).match(/.{1,64}/g)!.join('\n') + '\n-----END PRIVATE KEY-----\n';
  const pub = b64(await crypto.subtle.exportKey('spki', publicKey));
  const msg = 'From: "Interac e-Transfer" <notify@payments.interac.ca>\r\nTo: leah@rezsite.com\r\nSubject: INTERAC e-Transfer: Jane Test sent you money.\r\nMessage-ID: <selftest@bake>\r\nDate: Mon, 16 Nov 2026 15:00:00 -0500\r\nContent-Type: text/plain; charset=utf-8\r\n\r\nJane Test sent you $300.00 (CAD) and the money has been automatically deposited.\r\nMessage: BAKE-ML9P\r\n';
  const s = await dkimSign(msg, { signatureData: [{ signingDomain: 'payments.interac.ca', selector: 'selftest', privateKey: pem }] });
  const resolver = async (n: string, t: string) => { if (n == 'selftest._domainkey.payments.interac.ca' && t == 'TXT') return [['v=DKIM1; k=rsa; p=' + pub]]; return doh(n, t); };
  const good = await dkimVerify(s.signatures + msg, { resolver }), bad = await dkimVerify(s.signatures + msg.replace('$300.00', '$900.00'), { resolver });
  const parsed = await PostalMime.parse(s.signatures + msg);
  const real = await doh('20230601._domainkey.gmail.com', 'TXT').then(() => 'ok').catch(e => 'fail: ' + e.message);
  let build = 'not loaded';
  try {   /* build (not publish) the newest pitch's first design, to prove the builder works here */
    const b = await getBuilder(), sb = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, { auth: { persistSession: false } });
    const { data: p } = await sb.from('redesign_pitches').select('business_name,redesigns,base_project').order('created_at', { ascending: false }).limit(1).single();
    const f = b.buildPitchSite(p.redesigns[0], p.base_project);
    build = 'builder of ' + b.BUILT_AT + ': ' + p.business_name + ' / ' + p.redesigns[0].name + ' = ' + f.length + ' pages, ' + f.reduce((a: number, x: any) => a + x.content.length, 0) + ' bytes';
  } catch (e) { build = 'fail: ' + (e as Error).message; }
  return { signed: interacSigned(good.results, good.headerFrom), tampered: interacSigned(bad.results, bad.headerFrom), parsed: parseInterac(parsed as any), dnsOverHttps: real, builder: build };
}

Deno.serve(async req => {
  const url = new URL(req.url);
  if (req.method != 'POST') return json({ service: 'bake-pay' });
  if (url.searchParams.has('selftest')) { try { return json(await selftest()); } catch (e) { return json({ error: String(e && (e as Error).stack || e) }, 500); } }
  const raw = new Uint8Array(await req.arrayBuffer());
  if (!raw.length || raw.length > 3_000_000) return json({ error: 'empty or too large' }, 413);
  const sb = createClient(Deno.env.get('SUPABASE_URL')!, Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!, { auth: { persistSession: false } });

  const mail: any = await PostalMime.parse(raw);
  const messageId = String(mail.messageId || '').slice(0, 300) || null;
  const fields = parseInterac({ subject: mail.subject || '', text: mail.text || '', html: mail.html || '' });
  let sig: any;
  try { const v = await dkimVerify(Buffer.from(raw), { resolver: doh }); sig = interacSigned(v.results, v.headerFrom); } catch (e) { sig = { ok: false, why: 'DKIM check failed: ' + (e as Error).message }; }

  const log: any = { message_id: messageId, from_address: (mail.from && mail.from.address || '').slice(0, 200), subject: String(mail.subject || '').slice(0, 300),
    sender_name: fields.sender, amount: fields.amount, pay_code: fields.code, deposited: fields.deposited, dkim_ok: sig.ok, dkim_domain: sig.domain || null };
  if (messageId) { const { data: seen } = await sb.from('bake_payments').select('id,result').eq('message_id', messageId).maybeSingle(); if (seen) return json({ result: 'duplicate', earlier: seen.result }); }
  const save = async (result: string, detail: string, order_id: number | null = null) => {
    const { error } = await sb.from('bake_payments').insert({ ...log, result, detail: detail.slice(0, 1000), order_id });
    if (error) console.error('bake_payments insert', error.message);
    return json({ result, detail, code: fields.code, amount: fields.amount });
  };

  if (!sig.ok) return save('not_interac', sig.why);
  if (!fields.code) return save('no_code', 'Interac email without a BAKE-XXXX pay code (registration, a payment without the code, or another notice).');
  const { data: order } = await sb.from('pitch_orders').select('*').eq('pay_code', fields.code).maybeSingle();
  if (!order) return save('no_order', 'No order with pay code ' + fields.code + '.');
  if (order.status == 'live') return save('already_live', 'Order ' + fields.code + ' is already live.', order.id);
  if (order.status == 'cancelled') return save('cancelled_order', 'Order ' + fields.code + ' was cancelled or replaced by a newer order; publish it by hand if this payment is for it.', order.id);
  if (fields.cancelled) return save('cancelled_transfer', 'This Interac notice is about a cancelled transfer.', order.id);
  if (!fields.deposited) return save('not_deposited', 'The e-Transfer still needs to be deposited (Autodeposit not on?). Deposit it, then click Payment received → publish.', order.id);
  if (fields.amount == null || fields.amount + 0.001 < Number(order.amount)) return save('underpaid', 'Received $' + fields.amount + ' but order ' + fields.code + ' is $' + order.amount + '.', order.id);

  await sb.from('pitch_orders').update({ status: 'paid', paid_at: new Date().toISOString(), paid_amount: fields.amount, paid_by: 'auto', publish_error: null }).eq('id', order.id);
  try {
    const row = await publish(sb, order);
    await sb.from('pitch_orders').update({ status: 'live', live_at: new Date().toISOString(), published_site_id: row && row.id }).eq('id', order.id);
    await sb.from('pitch_orders').update({ status: 'cancelled' }).eq('pitch_id', order.pitch_id).eq('status', 'awaiting_payment').neq('id', order.id);
    await sb.from('redesign_pitches').update({ status: 'accepted', updated_at: new Date().toISOString() }).eq('id', order.pitch_id);
    return save('published', 'Paid $' + fields.amount + ' by ' + (fields.sender || '?') + '; ' + order.design + ' is live at https://' + order.pagename + '.' + DOMAIN + '/', order.id);
  } catch (e) {
    await sb.from('pitch_orders').update({ publish_error: String((e as Error).message).slice(0, 500) }).eq('id', order.id);
    return save('paid_publish_failed', 'Paid, but publishing failed: ' + (e as Error).message + '. Click Publish again in BAKER Admin.', order.id);
  }
});
