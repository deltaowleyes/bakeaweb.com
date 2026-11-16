/* Publishing a one-page pitch makes a complete website: every menu entry gets its own page and every link works. */
import { test, expect, openStudio, makeStarter } from './helpers.js';

/* An invented one-page site with the kind of menu a pitch has: groups, "#" links, one outside link. */
const SITE = {
  biz: { name: 'Fernhill Movers', desc: 'Local and long-distance moves' },
  pages: [{ id: 'p-home', name: 'Home', status: 'new', sections: [
    { id: 'shero', type: 'hero', title: 'Movers you can trust', text: 'Local and rural moves.', linkText: 'Get a free quote', link: '#', link2Text: 'See our services' },
    { id: 'stiles', type: 'tiles', title: 'Our services', text: 'Homes, offices and everything in between.', items: [
      { id: 't1', title: 'Residential moving', text: 'Apartments and houses.', link: '#', linkText: 'Learn more' },
      { id: 't2', title: 'Office moving', text: 'Low downtime.', link: '#', linkText: 'Learn more' },
      { id: 't3', title: 'Storage', text: 'Climate-controlled.', link: '#', linkText: 'Learn more' }] },
    { id: 'sfeat', type: 'feature', eyebrow: 'Storage', headline: 'Storage watched around the clock', text: 'Climate-controlled storage with cameras running all day and night.', linkText: 'Ask about storage', link: '#' },
    { id: 'sabout', type: 'text', title: 'About us', text: 'A family business since 1998. We treat your things like our own.' },
    { id: 'scon', type: 'contact', title: 'Visit us', linkText: 'Get directions', items: [{ id: 'c1', title: 'Address', text: '1 Harbour Road, Lakeview, ON', link: '#' }, { id: 'c2', title: 'Phone', text: '555-0100', link: 'tel:5550100' }] },
    { id: 'scta', type: 'cta', title: 'Ready to move?', linkText: 'Get a free quote', link: '#contact' }
  ] }],
  menu: { items: [
    { id: 'g1', label: 'Services', href: '', children: [{ id: 'm1', label: 'Residential moving', href: '#' }, { id: 'm2', label: 'Office moving', href: '#' }] },
    { id: 'm3', label: 'Storage', href: '#' }, { id: 'm4', label: 'About us', href: '#' },
    { id: 'm5', label: 'Reviews', href: 'https://reviews.example.com/fernhill' }, { id: 'm6', label: 'Contact', href: '#' }
  ], cta: { label: 'Free quote', href: '#' } }
};

test('a one-page pitch publishes as a complete multi-page site with working links', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules');
  await openStudio(page);
  await makeStarter(page);
  const r = await page.evaluate(async M => {
    const P = await import('/src/lib/publish.js');
    const S = JSON.parse(JSON.stringify(window.BAKE.state()));
    Object.assign(S, { biz: M.biz, pages: M.pages }); S.menu = Object.assign(S.menu, { items: M.menu.items, cta: M.menu.cta });
    const before = JSON.stringify(S), files = P.siteFiles(S, 'hearth-a'), paths = files.map(f => f.path), bad = [], menus = {};
    for (const f of files) {
      const doc = new DOMParser().parseFromString(f.content, 'text/html'), ids = new Set([...doc.querySelectorAll('[id]')].map(e => e.id));
      for (const a of doc.querySelectorAll('a')) {
        const h = (a.getAttribute('href') || '').trim();
        if (!h || h == '#' || (h[0] == '#' && !ids.has(h.slice(1))) || (/^[\w-]+\.html$/.test(h) && !paths.includes(h))) bad.push(f.path + ': "' + a.textContent.trim().slice(0, 30) + '" → ' + (h || '(empty)'));
      }
      if (f.path == 'index.html') for (const a of doc.querySelectorAll('.vh-d header a')) menus[a.textContent.trim()] = a.getAttribute('href');
    }
    const storage = new DOMParser().parseFromString(files.find(f => f.path == 'storage.html').content, 'text/html');
    return { paths, bad, menus, unchanged: JSON.stringify(S) == before, storageHas: !!storage.querySelector('[data-type="feature"]'), storageHead: storage.querySelector('[data-type="pagehead"]').textContent };
  }, SITE);
  expect(r.paths).toEqual(['index.html', 'residential-moving.html', 'office-moving.html', 'storage.html', 'about-us.html', 'contact.html']);
  expect(r.bad).toEqual([]);
  expect(r.menus['Storage']).toBe('storage.html');
  expect(r.menus['Contact']).toBe('contact.html');
  expect(r.menus['Reviews']).toBe('https://reviews.example.com/fernhill');   // outside links stay outside
  expect(r.storageHas).toBe(true);
  expect(r.storageHead).toContain('Storage');
  expect(r.unchanged).toBe(true);                                             // the saved project is never changed
});

test('real inner pages saved by a pitch run are kept, missing ones are made, and every design gets them', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules');
  await openStudio(page);
  await makeStarter(page);
  const r = await page.evaluate(async M => {
    const P = await import('/src/lib/publish.js');
    const S = JSON.parse(JSON.stringify(window.BAKE.state()));
    const about = { id: 'p-about', name: 'About us', url: '', status: 'new', sections: [
      { id: 'a1', type: 'pagehead', title: 'About us', text: 'Family owned since 1998.' },
      { id: 'a2', type: 'text', title: 'Our story', text: 'Real words from their own About page.' }] };
    Object.assign(S, { biz: M.biz, pages: M.pages.concat([about]) }); S.menu = Object.assign(S.menu, { items: M.menu.items, cta: M.menu.cta });
    const files = P.siteFiles(S, 'hearth-a'), paths = files.map(f => f.path);
    const aboutHtml = files.find(f => f.path == 'about-us.html').content;
    const homeDoc = new DOMParser().parseFromString(files[0].content, 'text/html');
    /* a design with its own one-page project still publishes the pitch's real inner pages */
    const own = JSON.parse(JSON.stringify(S)); own.pages = [own.pages[0]];
    const merged = P.pitchProject({ project: own }, S);
    /* the prospect preview can open the About page and come back */
    const pv = window.BAKE.site.previewPage(S, 'hearth-a', 'About us');
    const ends = merged.pages.slice(1).every(p => p.sections.some(x => x.type == 'cta'));
    return { ends, paths, real: aboutHtml.includes('Real words from their own About page.'), aboutLink: homeDoc.querySelector('.vh-d header a[href="about-us.html"]') != null,
      merged: merged.pages.map(p => p.name), ownAbout: merged.pages[1].sections.some(x => /Real words/.test(x.text || '')), pvAbout: pv.includes('Real words'), pvHome: pv.includes('href="#@home"'),
      homeMarker: window.BAKE.site.previewPage(S, 'hearth-a', 'home').includes('href="#@about%20us"') };
  }, SITE);
  expect(r.paths).toEqual(['index.html', 'about-us.html', 'residential-moving.html', 'office-moving.html', 'storage.html', 'contact.html']);
  expect(r.real).toBe(true);
  expect(r.aboutLink).toBe(true);
  expect(r.merged).toEqual(['Home', 'About us', 'Residential moving', 'Office moving', 'Storage', 'Contact']);   // the pitch's real page + pages made for the rest
  expect(r.ownAbout).toBe(true);
  expect(r.ends).toBe(true);                                                     // every inner page ends with the call to action
  expect(r.pvAbout).toBe(true);
  expect(r.pvHome).toBe(true);
  expect(r.homeMarker).toBe(true);
});
