/* 2026-11-19: what the best builder templates have, on every pitch template: a call button in the first screen,
   a proof / rating badge, a menu that stays at the top while you scroll, and scroll animation on the live page. */
import { test, expect, openStudio, makeStarter } from './helpers.js';

async function site(page, badge) {
  await openStudio(page);
  await makeStarter(page);
  return page.evaluate(async badge => {
    const S = JSON.parse(JSON.stringify(window.BAKE.state()));
    S.biz.badge = badge;
    const home = S.pages[0];
    home.sections.push({ id: 'scon', type: 'contact', title: 'Find us', items: [{ id: 'c1', title: 'Phone', text: '705-555-0142', link: 'tel:7055550142' }] });
    return S;
  }, badge);
}

test('hero has a call button and a proof badge; a star rating shows only with a real score', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules');
  const S = await site(page, { text: 'Serving the lake since 1992', sub: 'family run' });
  const r = await page.evaluate(S => {
    const doc = new DOMParser().parseFromString(window.BAKE.site.html(S, 'harbour-a'), 'text/html');
    const S2 = Object.assign({}, S, { biz: Object.assign({}, S.biz, { badge: { score: 4.8, count: 37, source: 'Google' } }) });
    const doc2 = new DOMParser().parseFromString(window.BAKE.site.html(S2, 'harbour-a'), 'text/html');
    return { call: doc.querySelector('.s-hero .bt-call')?.getAttribute('href'), callText: doc.querySelector('.s-hero .bt-call')?.textContent,
      head: doc.querySelector('.vh-d .hph')?.getAttribute('href'), badge: doc.querySelector('.s-hero .hb')?.textContent,
      stars: !!doc.querySelector('.hb-st'), rated: doc2.querySelector('.s-hero .hb')?.getAttribute('aria-label') };
  }, S);
  expect(r.call).toBe('tel:+17055550142');
  expect(r.callText).toContain('705-555-0142');
  expect(r.head).toBe('tel:+17055550142');
  expect(r.badge).toContain('Serving the lake since 1992');
  expect(r.stars).toBe(false);
  expect(r.rated).toBe('Rated 4.8 out of 5 from 37 reviews');
});

test('published page: the menu stays at the top while scrolling, and sections animate in', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules');
  const S = await site(page, { text: 'Since 1992' });
  const html = await page.evaluate(S => window.BAKE.site.html(S, 'harbour-a'), S);
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.setContent(html);
  const r = await page.evaluate(async () => {
    const h = document.querySelector('.vh-d .hd');
    window.scrollTo(0, 1500); await new Promise(f => setTimeout(f, 300));
    const card = document.querySelector('main>.s:not(.s-hero) .w>*');
    return { pos: getComputedStyle(h).position, top: Math.round(h.getBoundingClientRect().top), scrolled: Math.round(window.scrollY),
      anim: getComputedStyle(card).animationName };
  });
  expect(r.scrolled).toBeGreaterThan(1000);
  expect(r.pos).toBe('sticky');
  expect(r.top).toBe(0);
  expect(r.anim).toContain('bk-in');
});
