/* bake-pay: Cloudflare Email Worker for leah@rezsite.com (pay/README.md).
   1. EVERY email is forwarded to Leah's Gmail first, exactly like the old Email Routing rule, whatever happens next.
   2. Emails whose From line is an interac.ca address are also sent (raw, unchanged) to the bake-pay Supabase Edge
      Function, which checks Interac's DKIM signature, matches the BAKE-XXXX pay code and publishes the site.
   This Worker holds no secrets: the function trusts only Interac's signature, never this Worker. */
export function looksLikeInterac(fromHeader) {
  return /@([a-z0-9-]+\.)*interac\.ca\s*>?\s*$/i.test(String(fromHeader || '').trim());
}

export default {
  async email(message, env, ctx) {
    let raw = null;
    try { raw = await new Response(message.raw).arrayBuffer(); }   // the stream can be read once; forward() still works after
    catch (e) { console.log('bake-pay: could not read the email', e && e.message); }

    await message.forward(env.FORWARD_TO);                         // Leah always gets the email (throws only if Cloudflare can't deliver)

    if (raw && looksLikeInterac(message.headers.get('from'))) {
      ctx.waitUntil(fetch(env.PAY_URL, { method: 'POST', headers: { 'content-type': 'message/rfc822' }, body: raw })
        .then(async r => console.log('bake-pay:', r.status, (await r.text()).slice(0, 500)))
        .catch(e => console.log('bake-pay: function call failed', e && e.message)));
    }
  }
};
