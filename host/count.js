/* Page-view counting for BAKE Host (plans/visitor-stats-for-every-site.md).
   Pure functions, so the Testing robot can check the rules without Cloudflare.
   Counted: a GET for an HTML page that was found, from something that looks like a person.
   Not counted: images and other files, 404s, HEAD, known bots and link previews, browser prefetches,
   and BAKE's own live checks (?bake-check=1). Nothing about the visitor is kept except totals. */

export const BOTS = /bot\b|bot\/|crawl|spider|slurp|archiver|facebookexternalhit|facebookcatalog|meta-externalagent|embedly|quora link|whatsapp|telegram|discord|slack|skype|vkshare|pinterest|redditbot|linkedinbot|bitlybot|ahrefs|semrush|mj12|dotbot|petalbot|bytespider|yandex|baidu|seznam|duckduck|applebot|gptbot|chatgpt|claude|anthropic|perplexity|ccbot|google-inspectiontool|googleother|lighthouse|pagespeed|gtmetrix|pingdom|uptime|statuscake|monitor|headless|phantomjs|puppeteer|playwright|selenium|curl|wget|python|httpx|aiohttp|go-http|java\/|okhttp|libwww|node-fetch|axios|undici|postman|insomnia|scrapy|feedfetcher|validator|preview|^$/i;

export function shouldCount(request, file) {
  if (request.method != 'GET' || !/\.html$/i.test(file)) return false;
  const url = new URL(request.url), h = request.headers;
  if (url.searchParams.has('bake-check')) return false;
  if (/prefetch|prerender/i.test((h.get('sec-purpose') || '') + (h.get('purpose') || '') + (h.get('x-moz') || ''))) return false;
  return !BOTS.test(h.get('user-agent') || '');
}

/* "index.html" → "/", "about.html" → "/about", "news/index.html" → "/news/" */
export function pagePath(file) {
  return '/' + file.replace(/(^|\/)index\.html$/i, '$1').replace(/\.html$/i, '');
}

export function device(ua) {
  if (/iPad|Tablet|Kindle|Silk|PlayBook|Android(?!.*Mobile)/i.test(ua)) return 'tablet';
  if (/Mobi|iPhone|iPod|Android|BlackBerry|Opera Mini|IEMobile/i.test(ua)) return 'phone';
  return 'computer';
}

/* Only the referring website's name (never the full link). A click from another page of the same site is "within the site". */
export function referrer(ref, host) {
  if (!ref) return 'direct';
  try {
    const r = new URL(ref).hostname.toLowerCase().replace(/^www\./, '');
    if (!r) return 'direct';
    if (r == host.replace(/^www\./, '')) return 'within the site';
    if (/(^|\.)google\./.test(r)) return 'google';
    if (/(^|\.)(facebook\.com|fb\.com|fb\.me)$/.test(r)) return 'facebook';
    if (/(^|\.)bing\.com$/.test(r)) return 'bing';
    return r;
  } catch { return 'direct'; }
}

export function viewRecord(request, domain, name, file) {
  const h = request.headers, url = new URL(request.url);
  return {
    p_domain: domain, p_pagename: name, p_path: pagePath(file),
    p_referrer: referrer(h.get('referer') || '', url.hostname.toLowerCase()),
    p_country: (request.cf && request.cf.country) || '',
    p_device: device(h.get('user-agent') || '')
  };
}
