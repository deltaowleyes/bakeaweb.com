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
  expect(res.out.length).toBe(189);
  for (const r of res.out) expect(r, r.id).toMatchObject({ pages: res.pages, index: true, ok: true });
});

test('designer families bring their own fonts and dark families stay readable', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
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
  expect(r.n).toBe(189);
  for (const k in r.out) { expect(r.out[k].cls, k).toBe(true); expect(r.out[k].gf, k).toBe(true); }
  // Ember and Glow turn a light palette into a dark page
  for (const k of ['ember', 'glow']) expect(parseInt(r.out[k].bg.slice(1, 3), 16), k).toBeLessThan(80);
});

test('flagship templates and starter sites use the sample photos', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
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
  expect(r.flags).toEqual(['hearth', 'volt', 'loom', 'bloom', 'pulse', 'commons', 'council', 'meridian', 'bridge', 'convoy', 'homeward', 'freight', 'timber', 'shoreline', 'basecamp', 'reel', 'marquee', 'frame', 'harbour', 'waterline', 'dockside', 'press', 'stitch', 'merch', 'taproom', 'roadside', 'patio', 'bedrock', 'breakwater', 'rebar', 'trapline', 'tannery', 'birchbark', 'gauge', 'flowline', 'ledger', 'whip', 'pourover', 'letterboard', 'tender', 'quill', 'lattice', 'colophon', 'swatch', 'imprint']);
  // the photo files are served
  const res = await page.request.get('photos/cafe/' + (await page.evaluate(async () => (await import('/src/lib/photos.json')).default.kinds.cafe.photos[0].id)) + '.jpg');
  expect(res.ok()).toBe(true);
});

test('menu, booking and products sections render with prices in every template', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
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

test('movers series: Freight loads its label font, and list rows only show a link when there is one', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await openStudio(page);
  await makeStarter(page);
  const r = await page.evaluate(async () => {
    const { Render } = await import('/src/lib/render.js'), ed = await import('/src/edit.js');
    const S = JSON.parse(JSON.stringify(window.BAKE.state()));
    const l = ed.defaultSection('list');
    l.items = [{ id: 'a', title: 'Fully insured', text: '', link: '#', linkText: '' }, { id: 'b', title: 'Storage', text: '', link: 'https://example.com/', linkText: '' }];
    S.pages[0].sections = [l];
    const h = Render.page(S, 'freight-a');
    return { mono: /data-gf="[^"]*IBM Plex Mono/.test(h), links: (h.match(/class="lr"/g) || []).length, open: (h.match(/>Open</g) || []).length, fams: ['convoy', 'homeward', 'freight'].every(k => Render.page(S, k + '-b').includes('tf-' + k)) };
  });
  expect(r.mono).toBe(true);
  expect(r.links).toBe(2);
  expect(r.open).toBe(1);
  expect(r.fams).toBe(true);
});

test('the private Pitch Book asks for a sign-in and shows no data without one', async ({ page }) => {
  await page.goto('pitches.html');
  await expect(page.locator('#lf')).toBeVisible();
  await expect(page.locator('.pitch')).toHaveCount(0);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
});

test('lodge series: Timber is a dark family and every lodge family draws its own look', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await openStudio(page);
  await makeStarter(page);
  const r = await page.evaluate(async () => {
    const { Render } = await import('/src/lib/render.js');
    const S = window.BAKE.state(), out = {};
    for (const k of ['timber', 'shoreline', 'basecamp']) { const h = Render.page(S, k + '-a'); out[k] = { cls: h.includes('tf-' + k), gf: /data-gf="[^"]+"/.test(h), bg: /--bg:(#[0-9a-f]{6})/.exec(h)[1] }; }
    return out;
  });
  for (const k in r) { expect(r[k].cls, k).toBe(true); expect(r[k].gf, k).toBe(true); }
  expect(parseInt(r.timber.bg.slice(1, 3), 16)).toBeLessThan(80);
});

test('grades and prices: only 65+ templates are offered, priced by their rating out of 99', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await openStudio(page);
  const r = await page.evaluate(async () => {
    const { Render } = await import('/src/lib/render.js');
    return { off: Render.OFFERED.map(t => [t.grade, t.price]), all: Render.TEMPLATES.length, p: [64, 65, 69, 70, 74, 75, 79, 80, 84, 85, 86, 88, 90, 95, 96, 99].map(Render.priceFor), lab: Render.priceLabel({ price: 7500 }) };
  });
  expect(r.all).toBeGreaterThan(r.off.length);
  for (const [g] of r.off) expect(g).toBeGreaterThanOrEqual(65);
  expect(r.p).toEqual([null, 0, 0, 0, 0, 50, 90, 100, 180, 200, 250, 350, 500, 1000, 1500, 7500]);
  expect(r.lab).toBe('$7,500');
});

test('step 5 designs: one card per family, Reel retired, best match first', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await openStudio(page);
  const r = await page.evaluate(async () => {
    const { Render } = await import('/src/lib/render.js');
    const P = { biz: { name: 'Owl News', desc: 'Indigenous news, reconciliation and community events for our First Nation.' }, menu: { items: [{ label: 'News' }, { label: 'Investigations' }] }, pages: [{ name: 'Home', sections: [] }], footer: {} };
    const Q = { biz: { name: 'Sunny', desc: 'Coffee and fresh baking' }, menu: { items: [] }, pages: [], footer: {} };
    const keys = Render.DESIGNS.map(d => d.k);
    return { n: keys.length, uniq: new Set(keys).size, reel: keys.includes('reel'), reelStill: !!Render.tpl('reel-a') && Render.tpl('reel-a').fam.k == 'reel',
      variants: Render.DESIGNS.every(d => d.variants.every(t => t.fam === d.fam)),
      news: Render.designsFor(P).slice(0, 4).map(x => x.d.k), cafe: Render.designsFor(Q).slice(0, 2).map(x => x.d.k) };
  });
  expect(r.n).toBe(r.uniq);
  expect(r.n).toBeLessThanOrEqual(60);
  expect(r.reel).toBe(false);
  expect(r.reelStill).toBe(true);
  expect(r.variants).toBe(true);
  expect(r.news).toContain('commons');
  expect(r.news).not.toContain('marquee');
  expect(r.cafe).toEqual(expect.arrayContaining(['hearth']));
});

test('a page that uses sample photos credits the photographers and Pixabay in the footer', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await openStudio(page);
  await makeStarter(page, { kind: 'food' });
  const r = await page.evaluate(async () => {
    const { Render } = await import('/src/lib/render.js');
    const S = window.BAKE.state(), h = Render.page(S, 'hearth-a');
    const S2 = JSON.parse(JSON.stringify(S)); S2.pages[0].sections = []; S2.brand.opts.hero = S2.brand.opts.hero.filter(o => o.kind != 'img');
    return { withPhotos: /class="pc">Photos by <a href="https:\/\/pixabay\.com\//.test(h), without: Render.page(S2, 'hearth-a').includes('class="pc"') };
  });
  expect(r.withPhotos).toBe(true);
  expect(r.without).toBe(false);
});

test('the prospect preview page shows a friendly message for a bad link and is hidden from search engines', async ({ page }) => {
  await page.goto('preview.html');
  await expect(page.locator('.empty')).toContainText("isn't working");
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
});

test('links inside a preview iframe never load a page inside the preview', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await page.goto('preview.html');
  const r = await page.evaluate(async () => {
    const { tameLinks } = await import('/src/lib/tame.js');
    const f = document.createElement('iframe'); f.setAttribute('sandbox', 'allow-same-origin'); document.body.append(f);
    let said = null; tameLinks(f, l => said = l);
    f.srcdoc = '<a id="m" href="#">Cabins</a><div style="height:3000px"></div><a id="j" href="#end">Jump</a><p id="end">end</p>';
    await new Promise(r => f.addEventListener('load', r, { once: true }));
    f.contentDocument.getElementById('m').click();
    await new Promise(r => setTimeout(r, 300));
    return { said, still: !!f.contentDocument.getElementById('m') };
  });
  expect(r.said).toBe('Cabins');
  expect(r.still).toBe(true);
});

test('every offered template has a sourced price comparison', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await openStudio(page);
  const res = await page.evaluate(async () => {
    const { Render } = await import('/src/lib/render.js');
    const { compare } = await import('/src/lib/compare.js');
    return Render.TEMPLATES.filter(t => t.price != null).map(t => { const c = compare(t.grade, t.price); return { id: t.id, ok: !!c && c.sources.length > 0 && c.sources.every(s => /^https:\/\//.test(s.url)) && /^(Free|US\$)/.test(c.tpl.label) && /^C\$/.test(c.agency.label) }; });
  });
  expect(res.length).toBeGreaterThan(50);
  for (const r of res) expect(r, r.id).toMatchObject({ ok: true });
});
