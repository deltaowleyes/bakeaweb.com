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

const ids = await page.evaluate(async ({ kind, pal, noPhotos }) => {
  const photosMod = await import('/src/lib/photos.js'), st = await import('/src/store.js'), ed = await import('/src/edit.js'), { Art } = await import('/src/lib/art.js'), { Render } = await import('/src/lib/render.js');
  const it = (title, text, extra) => Object.assign({ id: 'i' + Math.random().toString(36).slice(2, 8), title, text: text || '', link: '#', linkText: '' }, extra || {});
  st.commit(S => {
    const D = kind == 'services' ? {
      name: 'Eagle Flight Electrical', desc: 'Licensed electricians serving Walpole Island, Wallaceburg and Chatham-Kent since 2009.',
      eyebrow: 'Licensed · Insured · Indigenous-owned', motto: 'POWER YOU CAN TRUST',
      tiles: [['Residential wiring', 'New builds, renovations and panel upgrades done to code.', 'Homes'], ['EV chargers', 'Level 2 chargers installed and inspected in one visit.', 'New'], ['Solar and battery', 'Cut your hydro bill with rooftop solar and backup power.', 'Energy'], ['Commercial service', 'Fit-outs, lighting and maintenance for local businesses.', 'Business'], ['24/7 emergencies', 'Power out or sparks? We answer the phone day and night.', 'Urgent'], ['Inspections', 'Safety checks for insurance, sales and older homes.', 'Safety']],
      feature: ['Community project', 'Lighting the new community arena', 'We wired 140 LED fixtures and a solar canopy for the new arena, finishing two weeks early and under budget.'],
      prices: ['From $129', 'From $899', 'Free quote', 'From $199', '24/7', '$149'],
      quotes: [['Rhonda J., Wallaceburg', 'They showed up on time, explained everything and left the place cleaner than they found it.'], ['Pastor Dale M.', 'Our church hall finally has lighting that works. Fair price and great people.'], ['Kyle S., Chatham', 'Same-day emergency call on a Sunday. Lifesavers.']]
    } : kind == 'crafts' ? {
      name: 'Sweetgrass & Bead Studio', desc: 'Handmade jewellery, quilts and pottery from makers on Walpole Island, sold online and at our studio.',
      eyebrow: 'Handmade on Walpole Island', motto: 'MADE BY HAND, MADE WITH HEART',
      tiles: [['Beaded earrings', 'Hand-stitched in seed beads, every pair one of a kind.', '$45'], ['Star quilt', 'Queen size, pieced and quilted by hand over six weeks.', '$680'], ['Clay mug', 'Wheel-thrown and glazed in river blue.', '$38'], ['Woven basket', 'Ash-split basket for gathering or display.', '$120'], ['Wool scarf', 'Soft, warm and knitted in small batches.', '$65'], ['Leather pouch', 'Hand-cut and stitched, with a beaded flap.', '$55']],
      feature: ['Meet the makers', 'Twelve makers, one studio, and a lot of tea', 'Every piece in the shop is made by an artist from the community. Come watch them work on Saturdays.'],
      quotes: [['Anne P., Toronto', 'The earrings are even more beautiful in person. I get compliments every time.'], ['Rita K.', 'Our star quilt is the heart of our home now.'], ['Sam D., Detroit', 'Fast shipping and a handwritten thank-you note. Lovely.']]
    } : {
      name: 'Two Rivers Bannock Co.', desc: 'Fresh bannock, wild-rice soups and strong coffee, made every morning on Walpole Island.',
      eyebrow: 'Indigenous-owned café since 2014', motto: 'MADE FROM SCRATCH, SHARED WITH LOVE',
      tiles: [['Classic bannock', 'Golden, fluffy and baked fresh at 6 a.m. every day.', 'Bakery'], ['Wild rice soup', 'Hand-harvested wild rice with smoked whitefish.', 'Lunch'], ['Indian tacos', 'Our bannock topped with chili, greens and cheese.', 'Favourite'], ['Strawberry lemonade', 'Made with berries from local growers in season.', 'Drinks'], ['Catering', 'Feasts and gatherings from 20 to 500 people.', 'Events'], ['Gift boxes', 'Bannock mix, jams and tea, shipped across Canada.', 'Shop']],
      feature: ['From our kitchen', 'Grandma Rose’s recipe, four generations strong', 'Every batch starts with the same recipe our grandmother taught us in 1962. We still mix it by hand.'],
      prices: ['$4', '$12', '$11', '$5', 'From $18', '$35'],
      quotes: [['Marie T., Sarnia', 'The best bannock I have ever had, and the people are just as warm.'], ['Chief’s office staff', 'They catered our gathering for 300 and everything was perfect.'], ['Jordan B.', 'Worth the drive from London. Get the wild rice soup.']]
    };
    S.biz = { name: D.name, desc: D.desc };
    S.brand.pal = Object.assign({}, Art.PALETTES[pal]);
    ['logo', 'hero', 'ill'].forEach(t => { ed.genSvg(t); const o = S.brand.opts[t]; const best = t == 'logo' ? (o.filter(x => x.lay === 0)[0] || o[0]) : o[0]; if (best) S.brand.pick[t] = best.id; });
    const sec = (type, f) => Object.assign(ed.defaultSection(type), f);
    const home = { id: 'p-home', name: 'Home', url: '', status: 'new', sections: [
      sec('hero', { eyebrow: D.eyebrow, title: D.name, text: D.desc, linkText: { services: 'Book a visit', crafts: 'Shop the studio' }[kind] || 'See the menu', link2Text: { services: 'Our work', crafts: 'Meet the makers' }[kind] || 'Order online' }),
      sec('stats', { title: '', items: [it('12', 'Years open'), it('40k', 'Happy customers'), it('4.9★', 'Google rating'), it('100%', 'Indigenous-owned')] }),
      sec('tiles', { title: { services: 'What we do', crafts: 'New in the shop' }[kind] || 'On the menu', text: { services: 'Licensed, insured and on time, every time.', crafts: 'One-of-a-kind pieces, made by hand.' }[kind] || 'A few favourites. Everything is made fresh.', moreText: 'See everything', cols: 3, items: D.tiles.map((t, i) => it(t[0], t[1], { eyebrow: (D.prices || [])[i] || t[2], linkText: kind == 'crafts' ? 'View' : 'Learn more' })) }),
      sec('feature', { title: '', eyebrow: D.feature[0], headline: D.feature[1], text: D.feature[2], linkText: 'Read the story' }),
      sec('gallery', { title: 'Gallery', text: '', items: ({ services: ['Panel upgrade', 'Arena lighting', 'Solar install', 'EV charger', 'New build', 'Night call'], crafts: ['In the studio', 'Beadwork', 'Quilting circle', 'On the wheel', 'Market day', 'Basketry'] }[kind] || ['Morning bake', 'The café', 'Summer powwow', 'Our team', 'Catering', 'The river']).map(t => it(t)) }),
      sec('testimonial', { title: 'What people say', items: D.quotes.map(q => it(q[0], q[1])) }),
      sec('contact', { title: 'Visit us', items: [it('Address', '2185 River Road, Walpole Island, ON'), it('Hours', 'Mon–Sat 7 a.m. – 3 p.m.'), it('Phone', '519-555-0142', { link: 'tel:5195550142' }), it('Email', 'hello@tworivers.ca', { link: 'mailto:hello@tworivers.ca' })], linkText: 'Get directions' }),
      sec('cta', kind == 'crafts' ? { title: 'Looking for a one-of-a-kind gift?', text: 'We take custom orders for weddings, graduations and naming ceremonies.', linkText: 'Ask about a custom piece' } : { title: kind == 'services' ? 'Need an electrician this week?' : 'Planning a gathering?', text: kind == 'services' ? 'Free quotes within 24 hours, anywhere in Chatham-Kent.' : 'We cater feasts, meetings and celebrations of every size.', linkText: kind == 'services' ? 'Get a free quote' : 'Ask about catering' })
    ] };
    S.pages = [home]; S.ui.page = home.id; S.ui.tpage = home.id;
    const { samplePhotos } = photosMod, ph = samplePhotos({ food: 'cafe', services: 'trades', crafts: 'crafts' }[kind] || kind);
    if (ph.length && !noPhotos) {
      const heroes = ph.filter(p => p.role == 'hero'), items = ph.filter(p => p.role != 'hero'), used = new Set();
      const img = p => ({ kind: 'img', src: p.src, label: p.label });
      // a picture that matches the card (word in its topic), else the next unused one
      const TOPIC = { crafts: ['bead', 'quilt', 'pottery', 'basket', 'yarn', 'leather', 'quilt', 'artisan', 'bead', 'quilt', 'pottery', 'market', 'basket'], food: ['bread', 'soup', 'taco', 'lemonade', 'friends', 'pancake', 'dough', 'latte', 'soup', 'taco', 'bread', 'pancake'], services: ['wiring', 'charging', 'solar', 'tools', 'hard hat', 'house', 'solar', 'wiring', 'solar', 'solar', 'charging', 'house', 'hard hat'] }[kind] || [];
      let n = 0; const next = () => { const w = TOPIC[n++]; const p = items.find(x => !used.has(x.id) && w && x.topic.includes(w)) || items.find(x => !used.has(x.id)) || items[0]; used.add(p.id); return img(p); };
      const o = { id: 'o-photo', kind: 'img', src: heroes[0].src, from: 'site', label: heroes[0].label };
      S.brand.opts.hero.unshift(o); S.brand.pick.hero = o.id;
      home.sections.forEach(s => { if (s.type == 'tiles') { s.showImg = true; s.items.forEach(i => { i.image = next(); }); } if (s.type == 'gallery') s.items.forEach(i => { i.image = next(); }); if (s.type == 'feature') s.image = next(); });
    }
    const L = l => ({ id: 'm' + l, label: l, href: '#' });
    S.menu.items = [L({ services: 'Services', crafts: 'Shop' }[kind] || 'Menu'), L(kind == 'crafts' ? 'Custom orders' : 'Catering'), { id: 'g1', label: 'About', href: '', children: [L('Our story'), L('Team'), L('Community')] }, L('Gallery'), L('Contact')];
    S.menu.cta = { label: { services: 'Free quote', crafts: 'Visit the shop' }[kind] || 'Order online', href: '#' };
    S.menu.vp.desktop.cta = true; S.menu.vp.tablet.cta = true;
    S.footer = { motto: D.motto, text: '© 2026 ' + D.name + ' · Walpole Island First Nation' };
  });
  return Render.TEMPLATES.map(t => t.id);
}, { kind: demoKind, pal: +(process.env.PAL || 0), noPhotos: !!process.env.NOPHOTOS });

const shot = await browser.newPage();
await shot.emulateMedia({ reducedMotion: 'reduce' });   // scroll animations would leave lower sections mid-move in a still picture
for (const id of ids.filter(i => i.includes(filter))) {
  const html = await page.evaluate(async id => { const Site = window.BAKE.site; return Site.html(window.BAKE.state(), id); }, id);
  for (const [w, tag] of [[1280, 'd'], [390, 'p']]) {
    await shot.setViewportSize({ width: w, height: 900 });
    await shot.setContent(html.replace(/ loading="lazy"/g, ''), { waitUntil: 'networkidle' });
    await shot.evaluate(() => document.fonts.ready);
    await shot.screenshot({ path: `${out}/${id}-${tag}.png`, fullPage: true });
  }
  console.log('shot', id);
}
await browser.close(); await server.close();
