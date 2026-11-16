/* Visitor stats (host/count.js + host/worker.js): only real page views are counted, and counting never slows or breaks a page. */
import { test, expect } from '@playwright/test';
import { shouldCount, pagePath, device, referrer, viewRecord } from '../../host/count.js';
import workerModule from '../../host/worker.js';
const worker = workerModule.fetch ? workerModule : workerModule.default;   // host/ has no package.json, so the default export may arrive wrapped

const CHROME = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36';
const IPHONE = 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/18.1 Mobile/15E148 Safari/604.1';
const req = (url, ua = CHROME, init = {}) => new Request(url, { ...init, headers: { 'user-agent': ua, ...(init.headers || {}) } });

test('the counting rules: pages by people count, everything else does not', () => {
  expect(shouldCount(req('https://sun.rezsite.com/'), 'index.html')).toBe(true);
  expect(shouldCount(req('https://sun.rezsite.com/', IPHONE), 'index.html')).toBe(true);
  expect(shouldCount(req('https://sun.rezsite.com/logo.png'), 'logo.png')).toBe(false);
  expect(shouldCount(req('https://sun.rezsite.com/site.css'), 'site.css')).toBe(false);
  expect(shouldCount(req('https://sun.rezsite.com/', CHROME, { method: 'HEAD' }), 'index.html')).toBe(false);
  expect(shouldCount(req('https://sun.rezsite.com/?bake-check=123'), 'index.html')).toBe(false);
  expect(shouldCount(req('https://sun.rezsite.com/', CHROME, { headers: { 'sec-purpose': 'prefetch;prerender' } }), 'index.html')).toBe(false);
  for (const bot of ['Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)', 'facebookexternalhit/1.1', 'curl/8.5.0',
    'Mozilla/5.0 (compatible; AhrefsBot/7.0)', 'python-requests/2.31', 'Mozilla/5.0 HeadlessChrome/131.0', ''])
    expect(shouldCount(req('https://sun.rezsite.com/', bot), 'index.html'), bot).toBe(false);
});

test('pages, devices and where visitors came from', () => {
  expect(pagePath('index.html')).toBe('/');
  expect(pagePath('about.html')).toBe('/about');
  expect(pagePath('news/index.html')).toBe('/news/');
  expect(device(IPHONE)).toBe('phone');
  expect(device(CHROME)).toBe('computer');
  expect(device('Mozilla/5.0 (iPad; CPU OS 17_0 like Mac OS X)')).toBe('tablet');
  expect(referrer('', 'sun.rezsite.com')).toBe('direct');
  expect(referrer('https://www.google.ca/search?q=sun', 'sun.rezsite.com')).toBe('google');
  expect(referrer('https://m.facebook.com/somepost?id=1', 'sun.rezsite.com')).toBe('facebook');
  expect(referrer('https://sun.rezsite.com/about', 'sun.rezsite.com')).toBe('within the site');
  expect(referrer('https://www.example.org/a/b?c', 'sun.rezsite.com')).toBe('example.org');
  const r = viewRecord(req('https://sun.rezsite.com/about', IPHONE, { headers: { referer: 'https://google.com/' } }), 'rezsite.com', 'sun', 'about.html');
  expect(r).toEqual({ p_domain: 'rezsite.com', p_pagename: 'sun', p_path: '/about', p_referrer: 'google', p_country: '', p_device: 'phone' });
});

test('the Worker counts a page once, after serving it, and never an image or a missing page', async () => {
  const sent = [], waits = [];
  const realFetch = globalThis.fetch, realCaches = globalThis.caches;
  globalThis.caches = { default: { match: async () => null, put: async () => {} } };
  globalThis.fetch = async (u, init) => {
    u = String(u.url || u);
    if (u.includes('/rpc/count_view')) { sent.push(JSON.parse(init.body)); return new Response('true'); }
    if (u.includes('/storage/v1/object/public/sites/rezsite.com/sun/') && /index\.html|logo\.png$/.test(u)) return new Response('ok');
    return new Response('nope', { status: 404 });
  };
  const ctx = { waitUntil: p => waits.push(p) };
  try {
    const env = { BAKE_COUNT_KEY: 'k' };
    expect((await worker.fetch(req('https://sun.rezsite.com/'), env, ctx)).status).toBe(200);
    expect((await worker.fetch(req('https://sun.rezsite.com/logo.png'), env, ctx)).status).toBe(200);
    expect((await worker.fetch(req('https://sun.rezsite.com/missing'), env, ctx)).status).toBe(404);
    expect((await worker.fetch(req('https://sun.rezsite.com/', 'Googlebot/2.1'), env, ctx)).status).toBe(200);
    expect((await worker.fetch(req('https://sun.rezsite.com/'), {}, ctx)).status).toBe(200);   // no key yet: serves, doesn't count
    await Promise.all(waits);
    expect(sent.length).toBe(1);
    expect(sent[0]).toMatchObject({ p_key: 'k', p_domain: 'rezsite.com', p_pagename: 'sun', p_path: '/', p_device: 'computer' });
    // Supabase down: the page still loads.
    globalThis.fetch = async (u) => String(u.url || u).includes('/rpc/') ? Promise.reject(new Error('down')) : new Response('ok');
    waits.length = 0;
    expect((await worker.fetch(req('https://sun.rezsite.com/'), env, ctx)).status).toBe(200);
    await Promise.all(waits);
  } finally { globalThis.fetch = realFetch; globalThis.caches = realCaches; }
});
