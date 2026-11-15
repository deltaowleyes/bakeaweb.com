# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/engine.spec.js >> the private Pitch Book asks for a sign-in and shows no data without one
- Location: tests/engine.spec.js:118:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "pitches.html", waiting until "load"

```

# Test source

```ts
  19  | 
  20  | for (const [old, want] of [['express', 'pro'], ['rezsite', 'pro'], ['pro', 'pro'], ['baker', 'baker']]) {
  21  |   test(`a saved ${old} project opens in ${want.toUpperCase()}`, async ({ page }) => {
  22  |     await openStudio(page);
  23  |     await page.evaluate(o => { const S = JSON.parse(JSON.stringify(window.BAKE.state())); S.edition = o; localStorage.setItem('bake-studio-v2', JSON.stringify(S)); }, old);
  24  |     await page.goto('./');
  25  |     expect((await state(page)).edition).toBe(want);
  26  |   });
  27  | }
  28  | 
  29  | test('every template makes complete page files', async ({ page }) => {
  30  |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  31  |   await openStudio(page);
  32  |   await makeStarter(page, { kind: 'community' });
  33  |   const res = await page.evaluate(async () => {
  34  |     const Site = window.BAKE.site, S = window.BAKE.state(), out = [];
  35  |     const { Render } = await import('/src/lib/render.js');
  36  |     for (const t of Render.TEMPLATES) {
  37  |       const list = Site.files(S, t.id);
  38  |       out.push({ id: t.id, pages: list.length, index: list.some(f => f.path == 'index.html'), ok: list.every(f => /^<!doctype html>/i.test(f.content) && f.content.includes('class="pv')) });
  39  |     }
  40  |     return { out, pages: S.pages.length };
  41  |   });
  42  |   expect(res.out.length).toBe(171);
  43  |   for (const r of res.out) expect(r, r.id).toMatchObject({ pages: res.pages, index: true, ok: true });
  44  | });
  45  | 
  46  | test('designer families bring their own fonts and dark families stay readable', async ({ page }) => {
  47  |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  48  |   await openStudio(page);
  49  |   await makeStarter(page);
  50  |   const r = await page.evaluate(async () => {
  51  |     const { Render } = await import('/src/lib/render.js');
  52  |     const S = window.BAKE.state(), out = {};
  53  |     for (const k of ['tide', 'ember', 'folio', 'block', 'bento', 'craft', 'glow', 'swiss', 'retro', 'lens']) {
  54  |       const h = Render.page(S, k + '-a');
  55  |       out[k] = { cls: h.includes('tf-' + k), gf: /data-gf="[^"]+"/.test(h), bg: /--bg:(#[0-9a-f]{6})/.exec(h)[1] };
  56  |     }
  57  |     return { out, n: Render.TEMPLATES.length };
  58  |   });
  59  |   expect(r.n).toBe(171);
  60  |   for (const k in r.out) { expect(r.out[k].cls, k).toBe(true); expect(r.out[k].gf, k).toBe(true); }
  61  |   // Ember and Glow turn a light palette into a dark page
  62  |   for (const k of ['ember', 'glow']) expect(parseInt(r.out[k].bg.slice(1, 3), 16), k).toBeLessThan(80);
  63  | });
  64  | 
  65  | test('flagship templates and starter sites use the sample photos', async ({ page }) => {
  66  |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  67  |   await openStudio(page);
  68  |   await makeStarter(page, { kind: 'food' });
  69  |   const r = await page.evaluate(async () => {
  70  |     const { Render } = await import('/src/lib/render.js');
  71  |     const S = window.BAKE.state(), home = S.pages[0];
  72  |     const tiles = home.sections.find(s => s.type == 'menu');
  73  |     const h = Render.page(S, 'hearth-a');
  74  |     return { lib: S.lib.length, heroImg: S.brand.opts.hero.some(o => o.kind == 'img' && /\/photos\/cafe\//.test(o.src)), tileImgs: tiles.items.every(i => i.image && i.image.kind == 'img'), menu: h.includes('mu-g') && h.includes('class="wm"'), flags: Render.FAMILIES.filter(f => f.flag).map(f => f.k) };
  75  |   });
  76  |   expect(r.lib).toBeGreaterThan(10);
  77  |   expect(r.heroImg).toBe(true);
  78  |   expect(r.tileImgs).toBe(true);
  79  |   expect(r.menu).toBe(true);
  80  |   expect(r.flags).toEqual(['hearth', 'volt', 'loom', 'bloom', 'pulse', 'commons', 'council', 'meridian', 'bridge', 'convoy', 'homeward', 'freight', 'timber', 'shoreline', 'basecamp', 'reel', 'marquee', 'frame', 'harbour', 'waterline', 'dockside', 'press', 'stitch', 'merch', 'taproom', 'roadside', 'patio', 'bedrock', 'breakwater', 'rebar', 'trapline', 'tannery', 'birchbark', 'gauge', 'flowline', 'ledger', 'whip', 'pourover', 'letterboard']);
  81  |   // the photo files are served
  82  |   const res = await page.request.get('photos/cafe/' + (await page.evaluate(async () => (await import('/src/lib/photos.json')).default.kinds.cafe.photos[0].id)) + '.jpg');
  83  |   expect(res.ok()).toBe(true);
  84  | });
  85  | 
  86  | test('menu, booking and products sections render with prices in every template', async ({ page }) => {
  87  |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  88  |   await openStudio(page);
  89  |   await makeStarter(page, { kind: 'services' });
  90  |   const r = await page.evaluate(async () => {
  91  |     const { Render } = await import('/src/lib/render.js'), ed = await import('/src/edit.js');
  92  |     const S = JSON.parse(JSON.stringify(window.BAKE.state()));
  93  |     S.pages[0].sections = ['menu', 'booking', 'products'].map(t => ed.defaultSection(t));
  94  |     return Render.TEMPLATES.map(t => { const h = Render.page(S, t.id); return (h.includes('s-menu') && h.includes('s-booking') && h.includes('s-products') && (h.match(/data-fk="price"/g) || []).length >= 9); });
  95  |   });
  96  |   expect(r.every(Boolean)).toBe(true);
  97  | });
  98  | 
  99  | test('movers series: Freight loads its label font, and list rows only show a link when there is one', async ({ page }) => {
  100 |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  101 |   await openStudio(page);
  102 |   await makeStarter(page);
  103 |   const r = await page.evaluate(async () => {
  104 |     const { Render } = await import('/src/lib/render.js'), ed = await import('/src/edit.js');
  105 |     const S = JSON.parse(JSON.stringify(window.BAKE.state()));
  106 |     const l = ed.defaultSection('list');
  107 |     l.items = [{ id: 'a', title: 'Fully insured', text: '', link: '#', linkText: '' }, { id: 'b', title: 'Storage', text: '', link: 'https://example.com/', linkText: '' }];
  108 |     S.pages[0].sections = [l];
  109 |     const h = Render.page(S, 'freight-a');
  110 |     return { mono: /data-gf="[^"]*IBM Plex Mono/.test(h), links: (h.match(/class="lr"/g) || []).length, open: (h.match(/>Open</g) || []).length, fams: ['convoy', 'homeward', 'freight'].every(k => Render.page(S, k + '-b').includes('tf-' + k)) };
  111 |   });
  112 |   expect(r.mono).toBe(true);
  113 |   expect(r.links).toBe(2);
  114 |   expect(r.open).toBe(1);
  115 |   expect(r.fams).toBe(true);
  116 | });
  117 | 
  118 | test('the private Pitch Book asks for a sign-in and shows no data without one', async ({ page }) => {
> 119 |   await page.goto('pitches.html');
      |              ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  120 |   await expect(page.locator('#lf')).toBeVisible();
  121 |   await expect(page.locator('.pitch')).toHaveCount(0);
  122 |   await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  123 | });
  124 | 
  125 | test('lodge series: Timber is a dark family and every lodge family draws its own look', async ({ page }) => {
  126 |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  127 |   await openStudio(page);
  128 |   await makeStarter(page);
  129 |   const r = await page.evaluate(async () => {
  130 |     const { Render } = await import('/src/lib/render.js');
  131 |     const S = window.BAKE.state(), out = {};
  132 |     for (const k of ['timber', 'shoreline', 'basecamp']) { const h = Render.page(S, k + '-a'); out[k] = { cls: h.includes('tf-' + k), gf: /data-gf="[^"]+"/.test(h), bg: /--bg:(#[0-9a-f]{6})/.exec(h)[1] }; }
  133 |     return out;
  134 |   });
  135 |   for (const k in r) { expect(r[k].cls, k).toBe(true); expect(r[k].gf, k).toBe(true); }
  136 |   expect(parseInt(r.timber.bg.slice(1, 3), 16)).toBeLessThan(80);
  137 | });
  138 | 
  139 | test('grades and prices: only 65+ templates are offered, priced by their rating out of 99', async ({ page }) => {
  140 |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  141 |   await openStudio(page);
  142 |   const r = await page.evaluate(async () => {
  143 |     const { Render } = await import('/src/lib/render.js');
  144 |     return { off: Render.OFFERED.map(t => [t.grade, t.price]), all: Render.TEMPLATES.length, p: [64, 65, 69, 70, 74, 75, 79, 80, 84, 85, 86, 88, 90, 95, 96, 99].map(Render.priceFor), lab: Render.priceLabel({ price: 7500 }) };
  145 |   });
  146 |   expect(r.all).toBeGreaterThan(r.off.length);
  147 |   for (const [g] of r.off) expect(g).toBeGreaterThanOrEqual(65);
  148 |   expect(r.p).toEqual([null, 0, 0, 0, 0, 50, 90, 100, 180, 200, 250, 350, 500, 1000, 1500, 7500]);
  149 |   expect(r.lab).toBe('$7,500');
  150 | });
  151 | 
  152 | test('a page that uses sample photos credits the photographers and Pixabay in the footer', async ({ page }) => {
  153 |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  154 |   await openStudio(page);
  155 |   await makeStarter(page, { kind: 'food' });
  156 |   const r = await page.evaluate(async () => {
  157 |     const { Render } = await import('/src/lib/render.js');
  158 |     const S = window.BAKE.state(), h = Render.page(S, 'hearth-a');
  159 |     const S2 = JSON.parse(JSON.stringify(S)); S2.pages[0].sections = []; S2.brand.opts.hero = S2.brand.opts.hero.filter(o => o.kind != 'img');
  160 |     return { withPhotos: /class="pc">Photos by <a href="https:\/\/pixabay\.com\//.test(h), without: Render.page(S2, 'hearth-a').includes('class="pc"') };
  161 |   });
  162 |   expect(r.withPhotos).toBe(true);
  163 |   expect(r.without).toBe(false);
  164 | });
  165 | 
  166 | test('the prospect preview page shows a friendly message for a bad link and is hidden from search engines', async ({ page }) => {
  167 |   await page.goto('preview.html');
  168 |   await expect(page.locator('.empty')).toContainText("isn't working");
  169 |   await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  170 | });
  171 | 
  172 | test('links inside a preview iframe never load a page inside the preview', async ({ page }) => {
  173 |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  174 |   await page.goto('preview.html');
  175 |   const r = await page.evaluate(async () => {
  176 |     const { tameLinks } = await import('/src/lib/tame.js');
  177 |     const f = document.createElement('iframe'); f.setAttribute('sandbox', 'allow-same-origin'); document.body.append(f);
  178 |     let said = null; tameLinks(f, l => said = l);
  179 |     f.srcdoc = '<a id="m" href="#">Cabins</a><div style="height:3000px"></div><a id="j" href="#end">Jump</a><p id="end">end</p>';
  180 |     await new Promise(r => f.addEventListener('load', r, { once: true }));
  181 |     f.contentDocument.getElementById('m').click();
  182 |     await new Promise(r => setTimeout(r, 300));
  183 |     return { said, still: !!f.contentDocument.getElementById('m') };
  184 |   });
  185 |   expect(r.said).toBe('Cabins');
  186 |   expect(r.still).toBe(true);
  187 | });
  188 | 
  189 | test('every offered template has a sourced price comparison', async ({ page }) => {
  190 |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  191 |   await openStudio(page);
  192 |   const res = await page.evaluate(async () => {
  193 |     const { Render } = await import('/src/lib/render.js');
  194 |     const { compare } = await import('/src/lib/compare.js');
  195 |     return Render.TEMPLATES.filter(t => t.price != null).map(t => { const c = compare(t.grade, t.price); return { id: t.id, ok: !!c && c.sources.length > 0 && c.sources.every(s => /^https:\/\//.test(s.url)) && /^(Free|US\$)/.test(c.tpl.label) && /^C\$/.test(c.agency.label) }; });
  196 |   });
  197 |   expect(res.length).toBeGreaterThan(50);
  198 |   for (const r of res) expect(r, r.id).toMatchObject({ ok: true });
  199 | });
  200 | 
```