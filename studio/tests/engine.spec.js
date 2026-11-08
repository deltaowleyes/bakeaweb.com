/* The page engine without clicking: saved-project upgrades, every template renders, page files. */
import { test, expect, openStudio, makeStarter, state } from './helpers.js';

test('old saved projects still open (v2 and IndigiHub → RezSite)', async ({ page }) => {
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
  expect(S.edition).toBe('rezsite');
  expect(S.pages[0].sections[0].text).toBe('From v2');
});

test('?v=indigihub still opens RezSite', async ({ page }) => {
  await openStudio(page, { v: 'indigihub' });
  expect((await state(page)).edition).toBe('rezsite');
});

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
  expect(res.out.length).toBe(24);
  for (const r of res.out) expect(r, r.id).toMatchObject({ pages: res.pages, index: true, ok: true });
});
