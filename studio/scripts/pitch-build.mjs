/* Pitch builder: turns a pitch spec (a real business's details, kept OUTSIDE this public repo) into a studio
   project and screenshots of it in chosen templates, for the private Pitch Book (pitches.html, Supabase redesign_pitches).
   Usage: cd studio && node scripts/pitch-build.mjs /path/to/spec.json /path/to/outDir
   spec = { biz:{name,desc}, pal:{bg,ink,acc,soft} | palIndex, logo:"url"?, logoMark:true? (a picture-only logo shown beside the name), hero:"url", templates:["convoy-a",…],
            menu:[label | {label, children:[label]}], cta:"label", footer:{motto,text},
            sections:[{ type, …fields, image?:"url", items?:[{ title, text, …fields, image?:"url" }] }],
            pages:[{ name, url?, sections:[…same as above…] }] }   ← the business's OTHER pages (About, Services, Contact…),
              read from their current site during the pitch run. Name each page like its menu entry, so the menu
              opens it. Menu entries without a page get one made from Home at publish (lib/complete.js).
   Writes outDir/project.json (studio project without view state) and outDir/<tpl>-d.png / -p.png. */
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';

const spec = JSON.parse(readFileSync(resolve(process.argv[2]), 'utf8')), out = resolve(process.argv[3] || 'pitch-out');
mkdirSync(out, { recursive: true });
const server = await createServer({ root: resolve('.'), logLevel: 'error', server: { port: 0 } });
await server.listen();
const url = server.resolvedUrls.local[0];
const browser = await chromium.launch();
const page = await browser.newPage();
await page.goto(url + '?v=pro#step-1');
await page.evaluate(() => localStorage.clear());
await page.goto(url + '?v=pro#step-1');
await page.waitForFunction(() => window.BAKE);

const project = await page.evaluate(async spec => {
  const st = await import('/src/store.js'), ed = await import('/src/edit.js'), { Art } = await import('/src/lib/art.js'), photos = await import('/src/lib/photos.js');
  const rid = p => p + Math.random().toString(36).slice(2, 8);
  /* a photo is a real URL, or "sample:<kind>:<topic word or photo id>" for one of the studio's own sample photos */
  const used = new Set();
  const img = src => {
    if (!src) return undefined;
    const m = /^sample:(\w+):?(.*)$/.exec(src);
    if (m) { const ps = photos.samplePhotos(m[1]); const p = ps.find(x => !used.has(x.id) && (!m[2] || x.id == m[2] || x.topic.includes(m[2]))) || ps.find(x => !used.has(x.id)) || ps[0]; used.add(p.id); return { kind: 'img', src: p.src, label: p.label }; }
    return { kind: 'img', src, label: '' };
  };
  st.commit(S => {
    S.biz = Object.assign({}, spec.biz);
    S.brand.pal = Object.assign({}, spec.pal || Art.PALETTES[spec.palIndex || 0]);
    ['logo', 'hero', 'ill'].forEach(t => { ed.genSvg(t); const o = S.brand.opts[t]; if (o[0]) S.brand.pick[t] = (t == 'logo' ? (o.find(x => x.lay === 0) || o[0]) : o[0]).id; });
    if (spec.logo) { const o = { id: 'o-logo', kind: 'img', src: spec.logo, from: 'site', label: S.biz.name + ' logo' }; if (spec.logoMark) o.mark = 1; S.brand.opts.logo.unshift(o); S.brand.pick.logo = o.id; }
    if (spec.hero) { const h = img(spec.hero); const o = { id: 'o-hero', kind: 'img', src: h.src, from: 'site', label: h.label }; S.brand.opts.hero.unshift(o); S.brand.pick.hero = o.id; }
    const mk = list => list.map(s => {
      const o = Object.assign(ed.defaultSection(s.type), s, { id: rid('s') });
      if (s.image) o.image = img(s.image); else delete o.image;
      if (s.items) o.items = s.items.map(i => Object.assign({ id: rid('i'), title: '', text: '', link: '#', linkText: '' }, i, i.image ? { image: img(i.image) } : {}));
      return o;
    });
    const home = { id: 'p-home', name: 'Home', url: '', status: 'new', sections: mk(spec.sections) };
    const inner = (spec.pages || []).map(pg => ({ id: rid('p'), name: pg.name, url: pg.url || '', status: 'new',
      sections: mk(pg.sections[0] && pg.sections[0].type == 'pagehead' ? pg.sections : [{ type: 'pagehead', title: pg.name, text: pg.intro || '' }].concat(pg.sections)) }));
    S.pages = [home].concat(inner); S.ui.page = home.id; S.ui.tpage = home.id;
    const L = l => typeof l == 'string' ? { id: rid('m'), label: l, href: '#' } : { id: rid('g'), label: l.label, href: '', children: l.children.map(L) };
    S.menu.items = (spec.menu || []).map(L);
    S.menu.cta = { label: spec.cta || 'Contact us', href: '#' }; S.menu.vp.desktop.cta = true; S.menu.vp.tablet.cta = true;
    S.footer = Object.assign({ motto: '', text: '' }, spec.footer);
  });
  const S = window.BAKE.state(), o = JSON.parse(JSON.stringify(S)); delete o.ui; delete o.source.log; o.notes = []; o.step = 5;
  return o;
}, spec);
writeFileSync(out + '/project.json', JSON.stringify(project));

const shot = await browser.newPage();
await shot.emulateMedia({ reducedMotion: 'reduce' });
for (const id of spec.templates) {
  const html = await page.evaluate(id => window.BAKE.site.html(window.BAKE.state(), id), id);
  for (const [w, tag] of [[1280, 'd'], [390, 'p']]) {
    await shot.setViewportSize({ width: w, height: 900 });
    await shot.setContent(html.replace(/ loading="lazy"/g, ''), { waitUntil: 'networkidle' });
    await shot.evaluate(() => document.fonts.ready);
    await shot.screenshot({ path: `${out}/${id}-${tag}.png`, fullPage: true });
  }
  console.log('shot', id);
}
await browser.close(); await server.close();
