/* Template contact sheet: renders every template with a rich demo business at desktop (1280) and phone (390)
   and saves full-page screenshots, so templates can be graded by eye.
   Usage: cd studio && node scripts/template-shots.mjs [outDir] [filter]
   (starts its own Vite server; filter = part of a template id, e.g. "tide" or "-a") */
import { chromium } from '@playwright/test';
import { createServer } from 'vite';
import { mkdirSync } from 'node:fs';
import { resolve } from 'node:path';

const out = resolve(process.argv[2] || 'shots'), filter = process.argv[3] || '', demoKind = process.env.DEMO || 'food';
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

const ids = await page.evaluate(async ({ kind, pal }) => {
  const st = await import('/src/store.js'), ed = await import('/src/edit.js'), { Art } = await import('/src/lib/art.js'), { Render } = await import('/src/lib/render.js');
  const it = (title, text, extra) => Object.assign({ id: 'i' + Math.random().toString(36).slice(2, 8), title, text: text || '', link: '#', linkText: '' }, extra || {});
  st.commit(S => {
    const D = kind == 'services' ? {
      name: 'Eagle Flight Electrical', desc: 'Licensed electricians serving Walpole Island, Wallaceburg and Chatham-Kent since 2009.',
      eyebrow: 'Licensed · Insured · Indigenous-owned', motto: 'POWER YOU CAN TRUST',
      tiles: [['Residential wiring', 'New builds, renovations and panel upgrades done to code.', 'Homes'], ['EV chargers', 'Level 2 chargers installed and inspected in one visit.', 'New'], ['Solar and battery', 'Cut your hydro bill with rooftop solar and backup power.', 'Energy'], ['Commercial service', 'Fit-outs, lighting and maintenance for local businesses.', 'Business'], ['24/7 emergencies', 'Power out or sparks? We answer the phone day and night.', 'Urgent'], ['Inspections', 'Safety checks for insurance, sales and older homes.', 'Safety']],
      feature: ['Community project', 'Lighting the new community arena', 'We wired 140 LED fixtures and a solar canopy for the new arena, finishing two weeks early and under budget.'],
      quotes: [['Rhonda J., Wallaceburg', 'They showed up on time, explained everything and left the place cleaner than they found it.'], ['Pastor Dale M.', 'Our church hall finally has lighting that works. Fair price and great people.'], ['Kyle S., Chatham', 'Same-day emergency call on a Sunday. Lifesavers.']]
    } : {
      name: 'Two Rivers Bannock Co.', desc: 'Fresh bannock, wild-rice soups and strong coffee, made every morning on Walpole Island.',
      eyebrow: 'Indigenous-owned café since 2014', motto: 'MADE FROM SCRATCH, SHARED WITH LOVE',
      tiles: [['Classic bannock', 'Golden, fluffy and baked fresh at 6 a.m. every day.', 'Bakery'], ['Wild rice soup', 'Hand-harvested wild rice with smoked whitefish.', 'Lunch'], ['Indian tacos', 'Our bannock topped with chili, greens and cheese.', 'Favourite'], ['Strawberry lemonade', 'Made with berries from local growers in season.', 'Drinks'], ['Catering', 'Feasts and gatherings from 20 to 500 people.', 'Events'], ['Gift boxes', 'Bannock mix, jams and tea, shipped across Canada.', 'Shop']],
      feature: ['From our kitchen', 'Grandma Rose’s recipe, four generations strong', 'Every batch starts with the same recipe our grandmother taught us in 1962. We still mix it by hand.'],
      quotes: [['Marie T., Sarnia', 'The best bannock I have ever had, and the people are just as warm.'], ['Chief’s office staff', 'They catered our gathering for 300 and everything was perfect.'], ['Jordan B.', 'Worth the drive from London. Get the wild rice soup.']]
    };
    S.biz = { name: D.name, desc: D.desc };
    S.brand.pal = Object.assign({}, Art.PALETTES[pal]);
    ['logo', 'hero', 'ill'].forEach(t => { ed.genSvg(t); const o = S.brand.opts[t]; const best = t == 'logo' ? (o.filter(x => x.lay === 0)[0] || o[0]) : o[0]; if (best) S.brand.pick[t] = best.id; });
    const sec = (type, f) => Object.assign(ed.defaultSection(type), f);
    const home = { id: 'p-home', name: 'Home', url: '', status: 'new', sections: [
      sec('hero', { eyebrow: D.eyebrow, title: D.name, text: D.desc, linkText: kind == 'services' ? 'Book a visit' : 'See the menu', link2Text: kind == 'services' ? 'Our work' : 'Order online' }),
      sec('stats', { title: '', items: [it('12', 'Years open'), it('40k', 'Happy customers'), it('4.9★', 'Google rating'), it('100%', 'Indigenous-owned')] }),
      sec('tiles', { title: kind == 'services' ? 'What we do' : 'On the menu', text: 'A few favourites. Everything is made fresh.', moreText: 'See everything', cols: 3, items: D.tiles.map(t => it(t[0], t[1], { eyebrow: t[2], linkText: 'Learn more' })) }),
      sec('feature', { title: '', eyebrow: D.feature[0], headline: D.feature[1], text: D.feature[2], linkText: 'Read the story' }),
      sec('gallery', { title: 'Gallery', text: '', items: [it('Morning bake'), it('The café'), it('Summer powwow'), it('Our team'), it('Catering'), it('The river')] }),
      sec('testimonial', { title: 'What people say', items: D.quotes.map(q => it(q[0], q[1])) }),
      sec('contact', { title: 'Visit us', items: [it('Address', '2185 River Road, Walpole Island, ON'), it('Hours', 'Mon–Sat 7 a.m. – 3 p.m.'), it('Phone', '519-555-0142', { link: 'tel:5195550142' }), it('Email', 'hello@tworivers.ca', { link: 'mailto:hello@tworivers.ca' })], linkText: 'Get directions' }),
      sec('cta', { title: kind == 'services' ? 'Need an electrician this week?' : 'Planning a gathering?', text: kind == 'services' ? 'Free quotes within 24 hours, anywhere in Chatham-Kent.' : 'We cater feasts, meetings and celebrations of every size.', linkText: kind == 'services' ? 'Get a free quote' : 'Ask about catering' })
    ] };
    S.pages = [home]; S.ui.page = home.id; S.ui.tpage = home.id;
    const L = l => ({ id: 'm' + l, label: l, href: '#' });
    S.menu.items = [L(kind == 'services' ? 'Services' : 'Menu'), L('Catering'), { id: 'g1', label: 'About', href: '', children: [L('Our story'), L('Team'), L('Community')] }, L('Gallery'), L('Contact')];
    S.menu.cta = { label: kind == 'services' ? 'Free quote' : 'Order online', href: '#' };
    S.menu.vp.desktop.cta = true; S.menu.vp.tablet.cta = true;
    S.footer = { motto: D.motto, text: '© 2026 ' + D.name + ' · Walpole Island First Nation' };
  });
  return Render.TEMPLATES.map(t => t.id);
}, { kind: demoKind, pal: +(process.env.PAL || 0) });

const shot = await browser.newPage();
for (const id of ids.filter(i => i.includes(filter))) {
  const html = await page.evaluate(async id => { const Site = window.BAKE.site; return Site.html(window.BAKE.state(), id); }, id);
  for (const [w, tag] of [[1280, 'd'], [390, 'p']]) {
    await shot.setViewportSize({ width: w, height: 900 });
    await shot.setContent(html, { waitUntil: 'networkidle' });
    await shot.evaluate(() => document.fonts.ready);
    await shot.screenshot({ path: `${out}/${id}-${tag}.png`, fullPage: true });
  }
  console.log('shot', id);
}
await browser.close(); await server.close();
