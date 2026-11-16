/* One-page sites (like pitch previews): no menu entry or button may be a dead "#" link.
   Placeholder links point at the matching part of the page, Contact when nothing fits, and
   "Get directions" / contact addresses at Google Maps. */
import { test, expect, openStudio, makeStarter } from './helpers.js';

/* An invented one-page marina site with the same kind of menu an import brings in: every link "#". */
const MARINA = {
  biz: { name: 'Fernhill Bay Marina', desc: 'Slips and boat services' },
  pages: [{ id: 'p-home', name: 'Home', status: 'new', sections: [
    { id: 'shero', type: 'hero', title: 'Your home port', text: 'Slips on the lake.', linkText: 'Book a transient slip', link: 'https://booking.example/fernhill', link2Text: 'See slip rates' },
    { id: 'srates', type: 'menu', title: '2026 slip rates', items: [{ id: 'r1', title: 'Seasonal, under 20 ft', text: '$1,200', link: '#' }, { id: 'r2', title: 'Transient dockage', text: '$2/ft', link: '#' }] },
    { id: 'sfac', type: 'list', title: 'Facilities', items: [{ id: 'f1', title: 'Shore power', text: '15 and 30 amp', link: '#' }, { id: 'f2', title: 'Showers', text: 'Open daily', link: '#' }] },
    { id: 'sbook', type: 'booking', title: 'Book a transient slip', linkText: 'Book online', link: 'https://booking.example/fernhill', items: [{ id: 'b1', title: 'Overnight dockage', link: '#' }] },
    { id: 'sgal', type: 'gallery', title: 'Around the marina', items: [{ id: 'g1', title: 'The docks', link: '#' }] },
    { id: 'scon', type: 'contact', title: 'Find us', linkText: 'Get directions', items: [{ id: 'c1', title: 'Address', text: '1 Harbour Road, Lakeview, ON', link: '#' }, { id: 'c2', title: 'Phone', text: '555-0100', link: 'tel:5550100' }] },
    { id: 'scta', type: 'cta', title: 'Make Fernhill your home port', linkText: 'Join the list', link: '#contact' }
  ] }],
  menu: { items: [
    { id: 'm1', label: 'Slips', href: '', children: [{ id: 'm12', label: 'Transient', href: '#' }, { id: 'm13', label: 'Rates', href: '#' }] },
    { id: 'm2', label: 'Facilities', href: '#' }, { id: 'm4', label: 'Gallery', href: '#' },
    { id: 'm5', label: 'Something else', href: '#' }, { id: 'm6', label: 'Contact', href: '#' }
  ], cta: { label: 'Book a slip', href: '#' } }
};

async function marina(page) {
  await openStudio(page);
  await makeStarter(page);
  await page.evaluate(M => {
    const S = JSON.parse(JSON.stringify(window.BAKE.state()));
    Object.assign(S, { biz: M.biz, pages: M.pages });
    S.menu = Object.assign(S.menu, { items: M.menu.items, cta: M.menu.cta });
    window.__marina = S;
  }, MARINA);
}

test('one-page sites have no dead "#" links in any template', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules');
  await marina(page);
  const r = await page.evaluate(async () => {
    const { Render } = await import('/src/lib/render.js');
    const Site = window.BAKE.site, S = window.__marina, bad = [];
    for (const t of Render.TEMPLATES) {
      const doc = new DOMParser().parseFromString(Site.html(S, t.id), 'text/html');
      const ids = new Set([...doc.querySelectorAll('[id]')].map(e => e.id));
      for (const a of doc.querySelectorAll('a')) {
        const h = (a.getAttribute('href') || '').trim();
        if (!h || h == '#' || (h[0] == '#' && !ids.has(h.slice(1)))) bad.push(t.id + ': "' + a.textContent.trim().slice(0, 30) + '" → ' + (h || '(empty)'));
      }
    }
    return { bad: bad.slice(0, 20), n: Render.TEMPLATES.length };
  });
  expect(r.n).toBeGreaterThan(100);
  expect(r.bad).toEqual([]);
});

test('placeholder links go to the matching part of the page', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules');
  await marina(page);
  const links = await page.evaluate(() => {
    const doc = new DOMParser().parseFromString(window.BAKE.site.html(window.__marina, 'hearth-a'), 'text/html'), out = {};
    for (const a of doc.querySelectorAll('header.hd a, footer a, main a')) { const k = a.textContent.trim().replace(/\s+/g, ' '); if (!(k in out)) out[k] = a.getAttribute('href'); }
    return out;
  });
  expect(links['Rates']).toBe('#srates');
  expect(links['Facilities']).toBe('#sfac');
  expect(links['Gallery']).toBe('#sgal');
  expect(links['Contact']).toBe('#scon');
  expect(links['Something else']).toBe('#scon');          // nothing fits → Contact
  expect(links['Join the list']).toBe('#scon');            // "#contact" → the contact section
  expect(links['Get directions']).toMatch(/^https:\/\/www\.google\.com\/maps\/search\/\?api=1&query=1%20Harbour%20Road/);
  expect(links['Book a transient slip']).toBe('https://booking.example/fernhill');   // real links are kept
});
