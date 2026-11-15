# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/engine.spec.js >> links inside a preview iframe never load a page inside the preview
- Location: tests/engine.spec.js:171:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "preview.html", waiting until "load"

```

# Test source

```ts
  73  |     const h = Render.page(S, 'hearth-a');
  74  |     return { lib: S.lib.length, heroImg: S.brand.opts.hero.some(o => o.kind == 'img' && /\/photos\/cafe\//.test(o.src)), tileImgs: tiles.items.every(i => i.image && i.image.kind == 'img'), menu: h.includes('mu-g') && h.includes('class="wm"'), flags: Render.FAMILIES.filter(f => f.flag).map(f => f.k) };
  75  |   });
  76  |   expect(r.lib).toBeGreaterThan(10);
  77  |   expect(r.heroImg).toBe(true);
  78  |   expect(r.tileImgs).toBe(true);
  79  |   expect(r.menu).toBe(true);
  80  |   expect(r.flags).toEqual(['hearth', 'volt', 'loom', 'bloom', 'pulse', 'commons', 'council', 'meridian', 'bridge', 'convoy', 'homeward', 'freight', 'timber', 'shoreline', 'basecamp', 'reel', 'marquee', 'frame', 'harbour', 'waterline', 'dockside', 'press', 'stitch', 'merch', 'taproom', 'roadside', 'patio']);
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
  119 |   await page.goto('pitches.html');
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
  139 | test('grades and prices: only 70+ templates are offered, priced by their rating out of 99', async ({ page }) => {
  140 |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  141 |   await openStudio(page);
  142 |   const r = await page.evaluate(async () => {
  143 |     const { Render } = await import('/src/lib/render.js');
  144 |     return { off: Render.OFFERED.map(t => [t.grade, t.price]), all: Render.TEMPLATES.length, p: [69, 70, 74, 75, 80, 85, 90, 99].map(Render.priceFor) };
  145 |   });
  146 |   expect(r.all).toBeGreaterThan(r.off.length);
  147 |   for (const [g] of r.off) expect(g).toBeGreaterThanOrEqual(70);
  148 |   expect(r.p).toEqual([null, 0, 0, 50, 100, 250, 500, 500]);
  149 | });
  150 | 
  151 | test('a page that uses sample photos credits the photographers and Pixabay in the footer', async ({ page }) => {
  152 |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  153 |   await openStudio(page);
  154 |   await makeStarter(page, { kind: 'food' });
  155 |   const r = await page.evaluate(async () => {
  156 |     const { Render } = await import('/src/lib/render.js');
  157 |     const S = window.BAKE.state(), h = Render.page(S, 'hearth-a');
  158 |     const S2 = JSON.parse(JSON.stringify(S)); S2.pages[0].sections = []; S2.brand.opts.hero = S2.brand.opts.hero.filter(o => o.kind != 'img');
  159 |     return { withPhotos: /class="pc">Photos by <a href="https:\/\/pixabay\.com\//.test(h), without: Render.page(S2, 'hearth-a').includes('class="pc"') };
  160 |   });
  161 |   expect(r.withPhotos).toBe(true);
  162 |   expect(r.without).toBe(false);
  163 | });
  164 | 
  165 | test('the prospect preview page shows a friendly message for a bad link and is hidden from search engines', async ({ page }) => {
  166 |   await page.goto('preview.html');
  167 |   await expect(page.locator('.empty')).toContainText("isn't working");
  168 |   await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
  169 | });
  170 | 
  171 | test('links inside a preview iframe never load a page inside the preview', async ({ page }) => {
  172 |   test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
> 173 |   await page.goto('preview.html');
      |              ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  174 |   const r = await page.evaluate(async () => {
  175 |     const { tameLinks } = await import('/src/lib/tame.js');
  176 |     const f = document.createElement('iframe'); f.setAttribute('sandbox', 'allow-same-origin'); document.body.append(f);
  177 |     let said = null; tameLinks(f, l => said = l);
  178 |     f.srcdoc = '<a id="m" href="#">Cabins</a><div style="height:3000px"></div><a id="j" href="#end">Jump</a><p id="end">end</p>';
  179 |     await new Promise(r => f.addEventListener('load', r, { once: true }));
  180 |     f.contentDocument.getElementById('m').click();
  181 |     await new Promise(r => setTimeout(r, 300));
  182 |     return { said, still: !!f.contentDocument.getElementById('m') };
  183 |   });
  184 |   expect(r.said).toBe('Cabins');
  185 |   expect(r.still).toBe(true);
  186 | });
  187 | 
```