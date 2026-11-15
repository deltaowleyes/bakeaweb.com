/* The page engine without clicking: saved-project upgrades, every template renders, page files. */
import { test, expect, openStudio, makeStarter, state } from './helpers.js';

test('old saved projects still open (v2, and IndigiHub → PRO)', async ({ page }) => {
  await openStudio(page);
  await page.evaluate(() => localStorage.setItem('bake-studio-v2', JSON.stringify({
    v: 2, step: 1, edition: 'indigihub', source: { has: true, url: 'https://old.example/', log: [], found: null },
    biz: { name: 'Old Project', desc: '' }, brand: { pal: { name: 'x', bg: '#ffffff', ink: '#111111', acc: '#c0392b', soft: '#eeeeee' }, font: 0, seed: { logo: 0, hero: 0, ill: 0 }, opts: { logo: [], hero: [], ill: [] }, pick: {}, star: {} },
    sections: [{ id: 's1', type: 'text', title: 'Hello', text: 'From v2' }],
    footer: { motto: '', text: '' }, menu: { items: [], cta: { label: 'Contact', href: '#' }, vp: { desktop: { type: 'bar', logo: 'left' }, tablet: { type: 'hamburger', logo: 'left' }, phone: { type: 'hamburger', logo: 'left' } } },
    tpl: { pick: null, view: null, fav: {} }, notes: [], req: { name: '', email: '' }, ai: { endpoint: '' }, ui: { vp: 'desktop' }
  })));
  await page.goto('./');
  const S = await state(page);
  expect(S.v).toBe(3);
  expect(S.edition).toBe('pro');
  expect(S.pages[0].sections[0].text).toBe('From v2');
});

for (const [old, want] of [['express', 'pro'], ['rezsite', 'pro'], ['pro', 'pro'], ['baker', 'baker']]) {
  test(`a saved ${old} project opens in ${want.toUpperCase()}`, async ({ page }) => {
    await openStudio(page);
    await page.evaluate(o => { const S = JSON.parse(JSON.stringify(window.BAKE.state())); S.edition = o; localStorage.setItem('bake-studio-v2', JSON.stringify(S)); }, old);
    await page.goto('./');
    expect((await state(page)).edition).toBe(want);
  });
}

test('every template makes complete page files', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await openStudio(page);
  await makeStarter(page, { kind: 'community' });
  const res = await page.evaluate(async () => {
    const Site = window.BAKE.site, S = window.BAKE.state(), out = [];
    const { Render } = await import('/src/lib/render.js');
    for (const t of Render.TEMPLATES) {
      const list = Site.files(S, t.id);
      out.push({ id: t.id, pages: list.length, index: list.some(f => f.path == 'index.html'), ok: list.every(f => /^<!doctype html>/i.test(f.content) && f.content.includes('class="pv')) });
    }
    return { out, pages: S.pages.length };
  });
  expect(res.out.length).toBe(63);
  for (const r of res.out) expect(r, r.id).toMatchObject({ pages: res.pages, index: true, ok: true });
});

test('designer families bring their own fonts and dark families stay readable', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page);
  const r = await page.evaluate(async () => {
    const { Render } = await import('/src/lib/render.js');
    const S = window.BAKE.state(), out = {};
    for (const k of ['tide', 'ember', 'folio', 'block', 'bento', 'craft', 'glow', 'swiss', 'retro', 'lens']) {
      const h = Render.page(S, k + '-a');
      out[k] = { cls: h.includes('tf-' + k), gf: /data-gf="[^"]+"/.test(h), bg: /--bg:(#[0-9a-f]{6})/.exec(h)[1] };
    }
    return { out, n: Render.TEMPLATES.length };
  });
  expect(r.n).toBe(63);
  for (const k in r.out) { expect(r.out[k].cls, k).toBe(true); expect(r.out[k].gf, k).toBe(true); }
  // Ember and Glow turn a light palette into a dark page
  for (const k of ['ember', 'glow']) expect(parseInt(r.out[k].bg.slice(1, 3), 16), k).toBeLessThan(80);
});

test('flagship templates and starter sites use the sample photos', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page, { kind: 'food' });
  const r = await page.evaluate(async () => {
    const { Render } = await import('/src/lib/render.js');
    const S = window.BAKE.state(), home = S.pages[0];
    const tiles = home.sections.find(s => s.type == 'menu');
    const h = Render.page(S, 'hearth-a');
    return { lib: S.lib.length, heroImg: S.brand.opts.hero.some(o => o.kind == 'img' && /\/photos\/cafe\//.test(o.src)), tileImgs: tiles.items.every(i => i.image && i.image.kind == 'img'), menu: h.includes('mu-g') && h.includes('class="wm"'), flags: Render.FAMILIES.filter(f => f.flag).map(f => f.k) };
  });
  expect(r.lib).toBeGreaterThan(10);
  expect(r.heroImg).toBe(true);
  expect(r.tileImgs).toBe(true);
  expect(r.menu).toBe(true);
  expect(r.flags).toEqual(['hearth', 'volt', 'loom']);
  // the photo files are served
  const res = await page.request.get('photos/cafe/' + (await page.evaluate(async () => (await import('/src/lib/photos.json')).default.kinds.cafe.photos[0].id)) + '.jpg');
  expect(res.ok()).toBe(true);
});

test('menu, booking and products sections render with prices in every template', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page, { kind: 'services' });
  const r = await page.evaluate(async () => {
    const { Render } = await import('/src/lib/render.js'), ed = await import('/src/edit.js');
    const S = JSON.parse(JSON.stringify(window.BAKE.state()));
    S.pages[0].sections = ['menu', 'booking', 'products'].map(t => ed.defaultSection(t));
    return Render.TEMPLATES.map(t => { const h = Render.page(S, t.id); return (h.includes('s-menu') && h.includes('s-booking') && h.includes('s-products') && (h.match(/data-fk="price"/g) || []).length >= 9); });
  });
  expect(r.every(Boolean)).toBe(true);
});
