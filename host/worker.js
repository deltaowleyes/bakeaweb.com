/* BAKE Host: serves published free sites (Cloudflare Worker, free plan).
     pagename.rezsite.com/…   → Supabase Storage  sites/rezsite.com/pagename/…
     pagename.bakedby.me/…    → Supabase Storage  sites/bakedby.me/pagename/…
     bakedbya.pro/pagename/…  → Supabase Storage  sites/bakedbya.pro/pagename/…   (also pagename.bakedbya.pro)
   Anything not published (www, the plain domains, unknown names) goes on to the domain's normal website
   (GitHub Pages), so nothing that works today breaks.
   Files are uploaded by the Admin page in BAKE Studio BAKER (studio/src/admin/). See host/README.md. */

import { shouldCount, viewRecord } from './count.js';

const STORE = 'https://gpwxuunutljcauoknhrh.supabase.co/storage/v1/object/public/sites/';
const COUNT_URL = 'https://gpwxuunutljcauoknhrh.supabase.co/rest/v1/rpc/count_view';
const PUBLISHABLE_KEY = 'sb_publishable_B7a1VEv6RX13n2JhA50tbQ_oR_oKfw9';   // public key, same one the studio uses
const DOMAINS = ['rezsite.com', 'bakedby.me', 'bakedbya.pro'];
const PATH_DOMAINS = ['bakedbya.pro'];   // these use domain/pagename/ addresses
const NAME = /^[a-z][a-z0-9-]{2,11}$/;
const SKIP = new Set(['www', 'mail', 'admin', 'api', 'app', 'studio', 'assets', 'static', 'cdn', 'ftp', 'email', 'webmail', 'smtp', 'imap', 'pop']);
const TYPES = {
  html: 'text/html; charset=utf-8', css: 'text/css; charset=utf-8', js: 'text/javascript; charset=utf-8', json: 'application/json',
  svg: 'image/svg+xml', png: 'image/png', jpg: 'image/jpeg', jpeg: 'image/jpeg', webp: 'image/webp', gif: 'image/gif', avif: 'image/avif',
  ico: 'image/x-icon', txt: 'text/plain; charset=utf-8', xml: 'application/xml', pdf: 'application/pdf', woff2: 'font/woff2', mp4: 'video/mp4'
};

export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url);
    const host = url.hostname.toLowerCase();
    const domain = DOMAINS.find(d => host == d || host.endsWith('.' + d));
    if (!domain || !['GET', 'HEAD'].includes(request.method)) return fetch(request);

    let name = '', rest = '';
    const sub = host == domain ? '' : host.slice(0, -domain.length - 1);
    if (sub) {
      if (sub.includes('.') || SKIP.has(sub) || !NAME.test(sub)) return fetch(request);
      name = sub; rest = url.pathname.slice(1);
    } else if (PATH_DOMAINS.includes(domain)) {
      const m = /^\/([a-z][a-z0-9-]{2,11})(\/.*)?$/.exec(url.pathname);
      if (!m) return fetch(request);
      name = m[1];
      if (!m[2]) {   // bakedbya.pro/greyowl → bakedbya.pro/greyowl/ (so the site's own links work)
        const probe = await getFile(domain, name, 'index.html', ctx);
        return probe ? Response.redirect(url.origin + '/' + name + '/' + url.search, 301) : fetch(request);
      }
      rest = m[2].slice(1);
    } else return fetch(request);

    // "" → index.html, "about" → about.html, "folder/" → folder/index.html
    let file = decodeURIComponent(rest);
    if (file.includes('..')) return notFound(domain, name);
    if (!file || file.endsWith('/')) file += 'index.html';
    else if (!/\.[a-z0-9]{2,5}$/i.test(file)) file += '.html';

    const res = await getFile(domain, name, file, ctx);
    if (res) {
      // Visitor stats: one page view, sent to Supabase after the page has gone out (visitors never wait for it).
      if (env.BAKE_COUNT_KEY && shouldCount(request, file)) ctx.waitUntil(countView(env.BAKE_COUNT_KEY, viewRecord(request, domain, name, file)));
      return res;
    }
    // A name with no site at all: let the domain's normal website answer (e.g. its own 404 page).
    if (file != 'index.html' && await getFile(domain, name, 'index.html', ctx)) return notFound(domain, name);
    return sub ? notFound(domain, name) : fetch(request);
  }
};

// Adds one to today's total for this site and page (host/stats.sql). A failure only loses this one count.
async function countView(key, rec) {
  try {
    await fetch(COUNT_URL, { method: 'POST', headers: { apikey: PUBLISHABLE_KEY, 'content-type': 'application/json' }, body: JSON.stringify({ p_key: key, ...rec }) });
  } catch { /* never break a page over a count */ }
}

async function getFile(domain, name, file, ctx) {
  const src = STORE + domain + '/' + name + '/' + file.split('/').map(encodeURIComponent).join('/');
  const cache = caches.default, key = new Request(src);
  let hit = await cache.match(key);
  if (!hit) {
    const r = await fetch(src, { cf: { cacheTtl: 0 } });
    if (!r.ok) return null;
    const ext = (file.split('.').pop() || '').toLowerCase();
    hit = new Response(r.body, {
      status: 200,
      headers: {
        'content-type': TYPES[ext] || 'application/octet-stream',
        'cache-control': 'public, max-age=60',          // a republish shows up within about a minute
        'access-control-allow-origin': '*',              // lets the Admin page check that an address is live
        'access-control-expose-headers': 'x-bake-site',
        'x-bake-site': domain + '/' + name,
        'x-content-type-options': 'nosniff',
        'referrer-policy': 'strict-origin-when-cross-origin'
      }
    });
    ctx.waitUntil(cache.put(key, hit.clone()));
  }
  return hit;
}

function notFound(domain, name) {
  const html = `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Page not found</title>
<style>body{font:18px/1.5 system-ui,sans-serif;display:grid;place-items:center;min-height:90vh;margin:0;background:#f6f5f1;color:#1d2a2c;text-align:center}a{color:#2f5d62}</style></head>
<body><div><h1>Page not found</h1><p>This page isn't part of this site.</p><p><a href="/${PATH_DOMAINS.includes(domain) ? name + '/' : ''}">Go to the home page</a> · <a href="https://bakeaweb.com/">Made with BAKE</a></p></div></body></html>`;
  return new Response(html, { status: 404, headers: { 'content-type': 'text/html; charset=utf-8', 'access-control-allow-origin': '*' } });
}
