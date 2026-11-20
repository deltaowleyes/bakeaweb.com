/* Listing panel on callers.html: opens with Start call. Shows EVERYTHING we have on the business
   (caller_business), lets the caller fix any listing field while on the phone and either
   "Save changes" or "Save + mark verified" (caller_update_business). Verifying gives the business a
   free-logo code to use on rezsite.com/verified.html. Every save is logged in rezsite_business_edits. */
import { useEffect, useState } from 'react';

const FIELDS = [
  ['name', 'Business name'], ['contact_name', 'Owner / contact person'], ['phone', 'Phone'], ['email', 'Email'],
  ['website', 'Website'], ['social_links', 'Facebook / Instagram / other links'], ['address', 'Street address'],
  ['city', 'City / town'], ['province', 'Province'], ['postal_code', 'Postal code'], ['community', 'Community / Nation'],
  ['category', 'Business type'], ['hours', 'Hours'], ['description', 'What they do (shown on the listing)']
];
const LONG = new Set(['description', 'social_links', 'hours']);
// Opens a business website in its own browser window (not a tab) so the caller can look at it while on the phone.
export const siteUrl = u => { u = String(u || '').trim().split(/[\s,]+/)[0]; return u ? (/^https?:/i.test(u) ? u : 'https://' + u) : ''; };
export const openSite = (u, e) => {
  const url = siteUrl(u); if (!url) return;
  const w = Math.min(1280, screen.availWidth - 40), h = Math.min(900, screen.availHeight - 60);
  const win = window.open(url, 'bake-site', `popup=yes,noopener=no,width=${w},height=${h},left=${screen.availWidth - w},top=20`);
  if (win) { e?.preventDefault(); win.opener = null; win.focus(); } // if a popup blocker stops it, the normal link opens a new tab instead
};
// Read-only facts, in a sensible order, with plain-language labels.
const INFO = [
  ['id', 'Listing #'], ['directory_category', 'Directory category'], ['t2', 'T2 design rating (1–99)'], ['t2_notes', 'T2 note'],
  ['score99', 'Old v1 rating'], ['score99_notes', 'v1 notes'], ['est_tier', 'Size'], ['est_revenue', 'Est. revenue'],
  ['est_package', 'Likely package'], ['est_budget_low', 'Est. web budget from'], ['est_budget_high', 'Est. web budget to'],
  ['est_value_low', 'Est. business value from'], ['est_value_high', 'Est. business value to'], ['est_confidence', 'Estimate confidence'], ['est_basis', 'Estimate basis'],
  ['built_with', 'Site built with'], ['copyright_year', 'Site copyright year'], ['https', 'Site has https'], ['mobile_ok', 'Works on phones'],
  ['site_loads', 'Site loads'], ['parked_or_sale', 'Domain parked / for sale'], ['possibly_closed', 'Possibly closed'],
  ['review_status', 'Review status'], ['review_notes', 'Review notes'], ['auto_grade', 'Auto grade'], ['auto_notes', 'Auto notes'],
  ['site_search_status', 'Website search'], ['site_search_notes', 'Website search notes'], ['site_found_source', 'Website found at'],
  ['source_url', 'Where we found the listing'], ['source_id', 'Source id'], ['call_status', 'Last call result'], ['called_at', 'Last called'],
  ['call_notes', 'Call log'], ['admin_notes', 'Chris\'s notes'], ['verification_status', 'Verification status'], ['owner_confirmed', 'Owner confirmed'],
  ['verified_at', 'Verified on'], ['verified_by', 'Verified by'], ['verify_notes', 'Verification note'],
  ['logo_url', 'Logo'], ['logo_uploaded_at', 'Logo uploaded'], ['claimed_by', 'Claimed by'], ['claimed_at', 'Claimed on'],
  ['imported_at', 'Added to directory'], ['updated_at', 'Last changed'], ['updated_by', 'Changed by'], ['discovered_by', 'Found by']
];
const SKIP = new Set([...FIELDS.map(f => f[0]), ...INFO.map(i => i[0]), 'logo_code', 'past_calls', 'edits', 'score', 'auto_score', 'auto_status', 'score99_at', 'score99_version', 'est_at', 'site_search_at', 'reviewed_at']);
const when = v => new Date(v).toLocaleString('en-CA', { timeZone: 'America/Toronto', dateStyle: 'medium', timeStyle: 'short' });
const show = (k, v) => {
  if (v === true) return 'Yes'; if (v === false) return 'No';
  if (/_at$/.test(k) && v) return when(v);
  if (/^est_(revenue|budget|value)/.test(k)) return '$' + (+v).toLocaleString('en-CA');
  return String(v);
};
const isUrl = v => typeof v === 'string' && /^https?:\/\//.test(v);

export default function Listing({ sb, c, onVerified }) {
  const [b, setB] = useState(null), [f, setF] = useState({}), [err, setErr] = useState(''), [msg, setMsg] = useState('');
  const [busy, setBusy] = useState(false), [note, setNote] = useState(''), [more, setMore] = useState(false);
  const [to, setTo] = useState(''), [sending, setSending] = useState(false), [sent, setSent] = useState(''), [sendErr, setSendErr] = useState('');
  const [saleTo, setSaleTo] = useState(''), [saleBusy, setSaleBusy] = useState(false), [saleSent, setSaleSent] = useState(''), [saleErr, setSaleErr] = useState(''), [saleShow, setSaleShow] = useState(false);
  const [vmTo, setVmTo] = useState(''), [vmBusy, setVmBusy] = useState(false), [vmSent, setVmSent] = useState(''), [vmErr, setVmErr] = useState(''), [vmShow, setVmShow] = useState(false);

  // Every keystroke is also kept in this browser (draftKey) until it is saved, so nothing typed during a call
  // can be lost: not by a page refresh, a login refresh, a crash or a reload of the listing (Nov 19 fix).
  const draftKey = 'bake-listing-draft-' + c.business_id;
  const readDraft = () => { try { return JSON.parse(localStorage.getItem(draftKey) || 'null'); } catch { return null; } };
  const writeDraft = d => { try { d ? localStorage.setItem(draftKey, JSON.stringify(d)) : localStorage.removeItem(draftKey); } catch { /* storage off */ } };
  const load = async (afterSave = false) => {
    const { data, error } = await sb.rpc('caller_business', { p_id: c.business_id });
    if (error) return setErr(error.message);
    const fresh = Object.fromEntries(FIELDS.map(([k]) => [k, data[k] ?? '']));
    if (afterSave) { writeDraft(null); setF(fresh); }
    else {
      // keep anything the caller typed that isn't saved yet; only fill in fields they haven't touched
      const draft = readDraft()?.f || {};
      setF(cur => Object.fromEntries(FIELDS.map(([k]) => {
        const mine = k in cur ? cur[k] : draft[k];
        return [k, mine !== undefined && String(mine).trim() !== String(data[k] ?? '').trim() ? mine : fresh[k]];
      })));
      const dn = readDraft()?.note; if (dn) setNote(n => n || dn);
    }
    setB(data);
    setTo(t => t || c.contact_email || data.email || '');
    setVmTo(t => t || c.contact_email || data.email || '');
    setSaleTo(t => t || c.contact_email || data.email || '');
  };
  useEffect(() => { load(); }, [c.business_id]);   // eslint-disable-line react-hooks/exhaustive-deps
  const edit = (k, v) => setF(cur => { const n = { ...cur, [k]: v }; writeDraft({ f: n, note, at: Date.now() }); return n; });
  const editNote = v => { setNote(v); writeDraft({ f, note: v, at: Date.now() }); };
  const dirty = !!b && FIELDS.some(([k]) => String(f[k] ?? '').trim() !== String(b[k] ?? '').trim());
  useEffect(() => {   // warn before closing / reloading the page with unsaved listing changes
    if (!dirty) return;
    const h = e => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', h); return () => window.removeEventListener('beforeunload', h);
  }, [dirty]);

  if (err && !b) return <p className="text-warn">{err}</p>;
  if (!b) return <p className="text-mute text-sm mt-3">Loading the full listing…</p>;
  const changed = FIELDS.filter(([k]) => String(f[k] ?? '').trim() !== String(b[k] ?? '').trim()).map(([, l]) => l);
  const save = async verify => {
    setBusy(true); setErr(''); setMsg('');
    const { data, error } = await sb.rpc('caller_update_business', { p_id: c.business_id, p: f, p_verify: verify, p_note: note });
    setBusy(false);
    if (error) return setErr(error.message);
    setMsg((verify ? 'Verified and saved. Give them the logo code below.' : 'Saved.') + (changed.length ? ' Saved changes: ' + changed.join(', ') + '.' : ' (No listing fields were changed.)'));
    await load(true); if (verify) onVerified?.(data);
  };
  const sendCode = async () => {
    setSending(true); setSendErr(''); setSent('');
    const { data, error } = await sb.rpc('caller_send_code', { p_id: c.business_id, p_email: to.trim(), p_contact: f.contact_name || c.contact_person || null });
    setSending(false);
    if (error) return setSendErr(error.message);
    setSent(`Sent to ${data.to}. Code ${data.code}.`); await load();
  };
  const sendVoicemail = async () => {
    setVmBusy(true); setVmErr(''); setVmSent('');
    const { data, error } = await sb.rpc('caller_send_voicemail', { p_id: c.business_id, p_email: vmTo.trim() });
    setVmBusy(false);
    if (error) return setVmErr(error.message);
    setVmSent(`Voicemail follow-up sent to ${data.to}.`);
  };
  const sendSale = async () => {
    setSaleBusy(true); setSaleErr(''); setSaleSent('');
    const { data, error } = await sb.rpc('caller_send_sale_rundown', { p_id: c.business_id, p_email: saleTo.trim(), p_contact: f.contact_name || c.contact_person || null });
    setSaleBusy(false);
    if (error) return setSaleErr(error.message);
    setSaleSent(`Sale rundown sent to ${data.to}.`);
  };
  const okEmail = v => /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.trim());
  const L = 'grid gap-1 text-sm font-semibold';
  const others = Object.entries(b).filter(([k, v]) => !SKIP.has(k) && v !== null && v !== '');
  const facts = INFO.filter(([k]) => b[k] !== null && b[k] !== undefined && b[k] !== '');

  return (
    <section className="mt-4 border-t border-line pt-4">
      <div className="flex flex-wrap items-center justify-between gap-2">
        <h3 className="text-lg font-bold m-0">📋 Their listing <span className="text-sm text-mute font-normal">read it back to them and fix anything that's wrong</span></h3>
        {b.verified_at
          ? <span className="text-sm font-bold bg-emerald-600 text-white rounded-full px-3 py-1">✓ Verified {when(b.verified_at)} by {b.verified_by}</span>
          : <span className="text-sm font-bold bg-slate-200 text-slate-800 rounded-full px-3 py-1">Not verified yet</span>}
      </div>

      {b.logo_code && (
        <div className="mt-3 bg-amber-50 border-2 border-amber-300 rounded-xl p-3 text-sm">
          <div className="flex flex-wrap items-center gap-3"><b>Their private code:</b><span className="font-mono text-2xl font-extrabold tracking-[.2em] bg-white rounded-lg px-3 py-1 border border-amber-300">{b.logo_code}</span>
            {b.logo_url ? <span className="flex items-center gap-2">Logo added <img src={b.logo_url} alt="" className="h-8 max-w-24 object-contain bg-white rounded border" /></span> : <span className="text-mute">no logo yet</span>}</div>
          <p className="mb-0 mt-2"><i>"You're now verified on RezSite. Go to <b>rezsite.com/verified</b>, find your business, press <b>Add your logo</b> and type the code {b.logo_code.split('').join(' ')}. It's free."</i> You can also email them: <a className="text-acc underline" href={`https://rezsite.com/verified.html?id=${b.id}`} target="_blank" rel="noopener">their listing link</a>.</p>
        </div>
      )}

      <div className="mt-3 bg-violet-50 border-2 border-violet-300 rounded-xl p-3 text-sm" data-testid="voicemail-email">
        <b>📨 Left a voicemail? Send the follow-up email</b>
        <p className="mt-1 mb-2">Sends Leah's follow-up email (from leah@rezsite.com) with <b>{b.name}</b> filled in. Only use an email the business posted itself (their website or Facebook page) or gave you on the phone, not one from a directory site.</p>
        <div className="flex flex-wrap gap-2 items-center">
          <input className="inp flex-1 min-w-[16rem]" type="email" placeholder="info@business.ca" value={vmTo} onChange={e => setVmTo(e.target.value)} aria-label="Voicemail follow-up email" />
          <button type="button" className="btn" disabled={vmBusy || !!vmSent || !okEmail(vmTo)} onClick={sendVoicemail}>{vmBusy ? 'Sending…' : vmSent ? '✓ Sent' : 'Send voicemail follow-up'}</button>
        </div>
        <button type="button" className="mt-2 text-acc font-semibold underline text-sm" onClick={() => setVmShow(!vmShow)}>{vmShow ? '▾ Hide' : '▸ Preview'} the email</button>
        {vmShow && (
          <div className="mt-2 bg-white border border-line rounded-lg p-3 whitespace-pre-line">
            <b>Subject: Following up on my voicemail – {b.name}'s listing and website</b>{'\n\n'}
            {`Hi ${b.name} team,

I just left you a voicemail and wanted to follow up here in case email is easier.

I'm Leah Courteaux with BAKE (BakeAWeb). We're verifying business listings on RezSite.com, and I'd like to confirm that ${b.name}'s details are correct.

While I'm reaching out, I'd also like to offer you three free previews of a refreshed website, built from your current site and images. There's no cost and no commitment to look at them. If you like one, prices start at $25.

If you're interested, just reply to this email or call me at 226-542-5991.

Thank you,
Leah Courteaux
BAKE / BakeAWeb
leah@rezsite.com 226-542-5991
bakeaweb.com
29598 Bishop Road
Wallaceburg, ON.
N8A 4L1

If you'd rather not hear from us, reply "unsubscribe" and we won't email you again.`}
          </div>
        )}
        {vmSent && <p className="text-emerald-700 font-semibold mb-0 mt-2">✓ {vmSent} Remember to pick "Voicemail left" as the outcome and save the call.</p>}
        {vmErr && <p className="text-warn mb-0 mt-2">{vmErr}</p>}
      </div>

      <div className="mt-3 bg-amber-50 border-2 border-amber-300 rounded-xl p-3 text-sm" data-testid="sale-email">
        <b>🏷️ Interested? Send them the sale rundown</b>
        <p className="mt-1 mb-2">Emails a short summary of the current offer (3 free designs, prices, the half-price sale, hosting, domains, paying) from leah@rezsite.com, so they can look it over in their own time. Ask first: <i>"Can I email you a quick rundown of the offer?"</i></p>
        <div className="flex flex-wrap gap-2 items-center">
          <input className="inp flex-1 min-w-[16rem]" type="email" placeholder="owner@business.ca" value={saleTo} onChange={e => setSaleTo(e.target.value)} aria-label="Sale rundown email" />
          <button type="button" className="btn" disabled={saleBusy || !!saleSent || !okEmail(saleTo)} onClick={sendSale}>{saleBusy ? 'Sending…' : saleSent ? '✓ Sent' : 'Send sale rundown'}</button>
        </div>
        <button type="button" className="mt-2 text-acc font-semibold underline text-sm" onClick={() => setSaleShow(!saleShow)}>{saleShow ? '▾ Hide' : '▸ Preview'} the email</button>
        {saleShow && (
          <div className="mt-2 bg-white border border-line rounded-lg p-3 whitespace-pre-line">
            <b>Subject: Our current offer for {b.name}: 3 free website designs</b>{'\n\n'}
            {`Hi ${(f.contact_name || c.contact_person || '').trim().split(' ')[0] || b.name + ' team'},

Thanks for your time today. Here's a quick rundown of our current offer, so you can look it over whenever suits you.

WHAT YOU GET
- Three free website designs made for ${b.name}, built from your current site, photos and information. No cost and no obligation to look.

IF YOU LIKE ONE
- A one-time price, usually $50 to $250 (Canadian) depending on the design. No monthly fees.
- Sale: once we email your designs, any design you pick in the first 24 hours is half price, then 40% off the next day, and 10% less each day after that.

HOSTING AND YOUR ADDRESS
- Free hosting, with a small "Baked with BAKE" badge at the bottom of your pages (or remove the badge from $5 a month).
- A free address like yourbusiness.rezsite.com or yourbusiness.bakedby.me.
- Connect a domain you already own for $100 one-time, or we can register a new one for $50 plus the yearly domain fee (usually about $15 a year).

PAYING
- By Interac e-Transfer. Your designs link has a Buy section: pick a name, get a pay code, send the e-Transfer with that code, and your site goes live as soon as it arrives.

Questions, or ready for your designs? Just reply to this email or call me at 226-542-5991.

Thank you,
Leah Courteaux
BAKE / BakeAWeb
leah@rezsite.com 226-542-5991
bakeaweb.com

If you'd rather not hear from us, reply "unsubscribe" and we won't email you again.`}
          </div>
        )}
        {saleSent && <p className="text-emerald-700 font-semibold mb-0 mt-2">✓ {saleSent} Ask them to check their inbox (and spam, just in case).</p>}
        {saleErr && <p className="text-warn mb-0 mt-2">{saleErr}</p>}
      </div>

      <div className="mt-3 bg-sky-50 border-2 border-sky-300 rounded-xl p-3 text-sm">
        <b>✉️ Send code to business email</b>
        <p className="mt-1 mb-2">Emails them a private code and a link where they can update their listing, add their logo, send photos privately and <b>ask for 3 free designs</b>. Ask first: <i>"Can I email you a private link to update your listing?"</i></p>
        <div className="flex flex-wrap gap-2 items-center">
          <input className="inp flex-1 min-w-[16rem]" type="email" placeholder="owner@business.ca" value={to} onChange={e => setTo(e.target.value)} aria-label="Business email" />
          <button type="button" className="btn" disabled={sending || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(to.trim())} onClick={sendCode}>{sending ? 'Sending…' : 'Send code to business email'}</button>
        </div>
        {sent && <p className="text-emerald-700 font-semibold mb-0 mt-2">✓ {sent} Ask them to check their inbox (and spam, just in case).</p>}
        {sendErr && <p className="text-warn mb-0 mt-2">{sendErr}</p>}
      </div>

      <div className="grid sm:grid-cols-2 gap-3 mt-3">
        {FIELDS.map(([k, l]) => (
          <label key={k} className={L + (LONG.has(k) ? ' sm:col-span-2' : '')}>
            <span>{l}{String(f[k] ?? '').trim() !== String(b[k] ?? '').trim() && <span className="text-amber-700"> · changed</span>}</span>
            {LONG.has(k) ? <textarea className="inp" rows={k === 'description' ? 3 : 2} value={f[k]} onChange={e => edit(k, e.target.value)} />
              : <input className="inp" value={f[k]} onChange={e => edit(k, e.target.value)} />}
            {k === 'website' && siteUrl(f.website) && <a className="text-acc underline font-semibold text-sm" href={siteUrl(f.website)} target="_blank" rel="noopener" onClick={e => openSite(f.website, e)}>🌐 Open website in new window ↗</a>}
          </label>
        ))}
        <label className={L + ' sm:col-span-2'}>Verification note (optional)<input className="inp" placeholder='e.g. "Confirmed with Mary (owner), new phone number"' value={note} onChange={e => editNote(e.target.value)} /></label>
      </div>
      {dirty && <p className="mt-3 mb-0 bg-amber-100 border-2 border-amber-400 rounded-lg px-3 py-2 text-sm font-semibold">⚠️ Not saved yet: {changed.join(', ')}. Your typing is kept on this computer until you press a Save button.</p>}
      {err && <p className="text-warn mb-0">{err}</p>}
      {msg && <p className="text-emerald-700 font-semibold mb-0">{msg}</p>}
      <div className="flex flex-wrap gap-2 mt-3">
        <button type="button" className="btn" disabled={busy} onClick={() => save(true)}>{busy ? 'Saving…' : b.verified_at ? '✓ Save + verify again' : '✓ Save + mark verified'}</button>
        <button type="button" className="btn2" disabled={busy || !changed.length} onClick={() => save(false)}>Save changes only</button>
        <span className="text-sm text-mute self-center">{changed.length ? 'Changed: ' + changed.join(', ') : 'No changes yet.'}</span>
      </div>
      <p className="text-xs text-mute mt-2 mb-0">Only press <b>mark verified</b> after the owner (or someone who works there) has confirmed the details. Every save is kept in a change log ({b.edits} so far).</p>

      {b.past_calls?.length > 0 && (
        <div className="mt-4"><b className="text-sm">Earlier calls</b>
          <ul className="text-sm mt-1 mb-0 pl-5">{b.past_calls.map((p, i) => <li key={i}>{p.day} · {p.caller} · {p.outcome}{p.contact ? ' · ' + p.contact : ''}{p.email ? ' (' + p.email + ')' : ''}{p.notes ? ' — ' + p.notes : ''}{p.next_step ? ' · next: ' + p.next_step : ''}</li>)}</ul>
        </div>
      )}

      <button type="button" className="mt-4 text-acc font-semibold underline text-sm" onClick={() => setMore(!more)}>{more ? '▾ Hide' : '▸ Show'} everything else we know ({facts.length + others.length} facts)</button>
      {more && (
        <dl className="mt-2 grid sm:grid-cols-[14rem_1fr] gap-x-4 gap-y-1 text-sm bg-paper rounded-xl p-3">
          {[...facts, ...others.map(([k]) => [k, k.replace(/_/g, ' ')])].map(([k, l]) => (
            <div key={k} className="contents"><dt className="font-semibold text-mute">{l}</dt>
              <dd className="m-0 whitespace-pre-line break-words">{isUrl(b[k]) ? <a className="text-acc underline break-all" href={b[k]} target="_blank" rel="noopener">{b[k]}</a> : show(k, b[k])}</dd></div>
          ))}
        </dl>
      )}
    </section>
  );
}
