/* BAKE Studio: turn a project into real, standalone web pages.
   - Site.html(): one complete HTML file for a page (used by the live preview's "View code" and by publishing).
   - Site.files(): every page of the site as files, with links between pages working.
   - Site.shotSite(): a page as a screenshot whose links and menus are clickable areas (BAKER portfolios on bakedbya.pro).
   Generated pages stay plain HTML + site.css (no React), see ARCHITECTURE.md. */
import siteCss from './site.css?raw';
import { Render } from './render.js';
import { Shot } from './shot.js';
import { completeSite } from './complete.js';

const esc = s => String(s == null ? '' : s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

/** Google Fonts stylesheet link for a page's data-gf="Family:400,700|Other:400" ('' if none). */
export function fontLink(html) {
  const m = /data-gf="([^"]*)"/.exec(html); if (!m) return '';
  const fams = m[1].replace(/&amp;/g, '&').split('|').filter(Boolean).map(x => {
    const [f, w] = x.split(':'); const ws = (w || '400').split(',').map(Number).sort((a, b) => a - b);
    return 'family=' + encodeURIComponent(f).replace(/%20/g, '+') + ':wght@' + ws.join(';');
  });
  return fams.length ? 'https://fonts.googleapis.com/css2?' + fams.join('&') + '&display=swap' : '';
}

/** A short web-safe name for a page: "About us" -> "about-us". Home is "index". */
export function slug(p, i) {
  if (i == 0) return 'index';
  return (String(p.name || 'page').toLowerCase().normalize('NFKD').replace(/[^\w\s-]/g, '').trim().replace(/[\s_]+/g, '-').replace(/-+/g, '-') || 'page') + '';
}

function pageMap(P) {
  const used = {}, map = [];
  P.pages.forEach((p, i) => { let s = slug(p, i), n = 2; while (used[s]) s = slug(p, i) + '-' + n++; used[s] = 1; map.push({ id: p.id, file: s + '.html', url: p.url || '', name: p.name }); });
  return map;
}
/* Point menu and button links that lead to one of the site's own pages at that page's file. */
function relink(html, map) {
  const norm = u => String(u || '').replace(/^https?:\/\/(www\.)?/i, '').replace(/[#?].*$/, '').replace(/\/+$/, '').toLowerCase();
  const byUrl = {}; map.forEach(m => { if (m.url) byUrl[norm(m.url)] = m.file; });
  const home = map[0], byName = {};
  map.forEach(m => { byName[String(m.name || '').trim().toLowerCase()] = m.file; });
  /* starter sites use href="#" with the page's name as the link text */
  html = html.replace(/<a([^>]*?)href="#"([^>]*)>([^<]*)<\/a>/g, (all, a, b, text) => {
    const f = byName[text.replace(/&amp;/g, '&').trim().toLowerCase()];
    return f ? '<a' + a + 'href="' + f + '"' + b + '>' + text + '</a>' : all;
  });
  /* links named like one of the site's pages (render.js marks them "#@name") */
  html = html.replace(/href="#@([^"]*)"/g, (all, n) => { const f = byName[decodeURIComponent(n)]; return f ? 'href="' + f + '"' : all; });
  /* the logo goes to the home page (on a one-page site it just scrolls to the top) */
  if (map.length > 1) html = html.replace(/class="lg" href="#top"/g, 'class="lg" href="index.html"');
  return html.replace(/href="([^"]*)"/g, (all, h) => {
    const raw = h.replace(/&amp;/g, '&');
    if (byUrl[norm(raw)]) return 'href="' + byUrl[norm(raw)] + '"';
    if (home && (raw == '/' || (home.url && norm(raw) == norm(home.url)))) return 'href="index.html"';
    return all;
  });
}

/** One complete HTML file. opt: { pageId, title, relink: pageMap } */
export function html(P, tplId, opt = {}) {
  let body = Render.page(P, tplId, { pageId: opt.pageId });
  if (opt.map) body = relink(body, opt.map);
  const pg = P.pages.filter(p => p.id == opt.pageId)[0] || P.pages[0] || {};
  const title = opt.title || ((pg.name && pg.name != 'Home' ? pg.name + ' | ' : '') + (P.biz.name || 'My site'));
  const fl = fontLink(body);
  return '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n' +
    '<title>' + esc(title) + '</title>\n' + (P.biz.desc ? '<meta name="description" content="' + esc(P.biz.desc) + '">\n' : '') +
    '<meta name="generator" content="BAKE Studio (bakeaweb.com)">\n' +
    (fl ? '<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n<link rel="stylesheet" href="' + esc(fl) + '">\n' : '') +
    '<style>\nbody{margin:0}\n' + siteCss + '\n</style>\n</head>\n<body>\n<div class="cq live">' + body + '</div>\n</body>\n</html>\n';
}

/** Every page as a file: [{ path: 'index.html', content }, …] */
export function files(P, tplId) {
  const map = pageMap(P);
  return map.map(m => ({ path: m.file, content: html(P, tplId, { pageId: m.id, map }) }));
}

/** Clickable-screenshot page (bakedbya.pro): pictures at desktop and phone width, with a see-through
    link over every link and menu entry. Resolves to { html, images: [{ path, blob }] }. */
export async function shotSite(P, tplId, opt = {}) {
  const map = pageMap(P), m = map.filter(x => x.id == opt.pageId)[0] || map[0];
  const body = relink(Render.page(P, tplId, { pageId: m.id }), map);
  const sizes = [['desktop', 1280], ['phone', 390]], images = [], figs = [];
  for (const [k, w] of sizes) {
    const r = await Shot.take(body, w, { scale: k == 'phone' ? 2 : 1, type: 'image/webp' });
    const blob = await (await fetch(r.url)).blob(), name = m.file.replace(/\.html$/, '') + '-' + k + '.webp';
    images.push({ path: name, blob });
    const pc = (v, t) => (v / t * 100).toFixed(3) + '%';
    const links = (r.map.links || []).filter(l => l.href != '#bake-menu').map(l => '<a href="' + esc(l.href) + '" style="left:' + pc(l.x, r.w) + ';top:' + pc(l.y, r.h) + ';width:' + pc(l.width, r.w) + ';height:' + pc(l.height, r.h) + '"' + (l.label ? ' aria-label="' + esc(l.label) + '"' : '') + '></a>').join('');
    figs.push('<div class="pic pic-' + k + '" style="max-width:' + w + 'px"><img src="' + name + '" alt="' + esc((m.name || 'Page') + ' of ' + (P.biz.name || 'this site')) + '" width="' + w + '" height="' + r.h + '">' + links + '</div>');
  }
  const out = '<!DOCTYPE html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1">\n<title>' + esc(opt.title || P.biz.name || 'Portfolio') + '</title>\n' +
    '<style>body{margin:0;background:#f4f4f2}.pic{position:relative;margin:0 auto}.pic img{display:block;width:100%;height:auto}.pic a{position:absolute;display:block}.pic a:hover,.pic a:focus{outline:2px solid rgba(37,99,235,.7);outline-offset:1px;border-radius:4px}.pic-phone{display:none}@media (max-width:700px){.pic-desktop{display:none}.pic-phone{display:block}}</style>\n</head>\n<body>\n' + figs.join('\n') + '\n</body>\n</html>\n';
  return { html: out, images };
}

/** A pitch design's project: its own project (if it has one) with the pitch's real inner pages added from
    base_project, so every design publishes the same full website. */
export function pitchProject(design, base) {
  const own = design && design.project, b = base || {};
  let p = !own ? b : (own.pages || []).length > 1 || (b.pages || []).length < 2 ? own : Object.assign({}, own, { pages: [own.pages[0]].concat(b.pages.slice(1)) });
  /* the whole website the prospect will get: a page for every menu entry, thin pages filled out (complete.js) */
  try { if (p && p.menu && p.pages) p = completeSite(p, { enrich: true }); } catch (e) { /* show what we have */ }
  return p;
}

/** A page of a site for a preview frame: the page named `name` (case-insensitive; 'home' or unknown = Home),
    with its logo leading back to Home. Links to other pages stay "#@name" for tameLinks(…, onPage). */
export function previewPage(P, tplId, name) {
  const key = String(name || '').trim().toLowerCase(), i = Math.max(0, P.pages.findIndex(p => String(p.name || '').trim().toLowerCase() == key));
  let out = html(P, tplId, { pageId: P.pages[i].id });
  if (i > 0) out = out.replace(/class="lg" href="#top"/g, 'class="lg" href="#@home"');
  return out;
}

/** A page of a site as a screenshot for the prospect preview, so the page code never reaches their browser
    before it is paid for. Resolves to { url, w, h, links, holes, secs } (see Shot.take); links to other pages
    are "#@name", the logo of an inner page goes "#@home". */
export async function previewShot(P, tplId, name, width) {
  const key = String(name || '').trim().toLowerCase(), i = Math.max(0, P.pages.findIndex(p => String(p.name || '').trim().toLowerCase() == key));
  let body = Render.page(P, tplId, { pageId: P.pages[i].id });
  if (i > 0) body = body.replace(/class="lg" href="#top"/g, 'class="lg" href="#@home"');
  const r = await Shot.take(body, width, { scale: width < 600 ? 2 : width < 1000 ? 1.5 : 1, type: 'image/webp', holes: true });
  return { url: r.url, w: r.w, h: r.h, links: r.map.links || [], holes: r.map.holes || [], secs: r.secs };
}

export const Site = { html, previewPage, previewShot, pitchProject, files, shotSite, fontLink, slug };
