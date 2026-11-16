/* BAKE: finish a one-page pitch into a complete multi-page website before it is published.
   Pitches are built as one Home page whose menu entries ("Residential", "About", "Contact"…) only scroll
   to parts of that page. When a site is paid for and published, every menu entry should open a real page.
   completeSite(P) gives each menu link with no page of its own a page:
     page header (the entry's name + a line from the matching part of Home)
     → the matching part(s) of Home (Render.matchSection, the same word matching as the one-page links)
     → the Home call to action, else the Home contact section.
   Entries that point outside (another website, mailto:, tel:) are left alone. Entries that already have a
   page of their own (same name — real inner pages saved by a pitch run) keep it; only the missing ones are made. Works on a copy; the saved project never changes. Site.files then
   points every menu link, the logo and the footer at the right page file. */
import { Render } from './render.js';

const clone = o => JSON.parse(JSON.stringify(o));
const outside = (h, home) => {
  h = String(h || '').trim();
  if (/^(mailto:|tel:|sms:)/i.test(h)) return true;
  if (!/^https?:\/\//i.test(h)) return false;
  const host = u => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch (e) { return ''; } };
  return !home || host(h) != host(home);   // a link to another website stays a link
};
const leaves = items => items.reduce((a, m) => a.concat(m.children && m.children.length ? m.children : [m]), []);
const plain = s => String(s || '').replace(/\s+/g, ' ').trim();
const firstLine = t => { t = plain(t); const m = /^(.{20,160}?[.!?])(\s|$)/.exec(t); return m ? m[1] : t.slice(0, 160); };

/** A copy of P with a real page for every menu entry. opt.max = most pages to add (default 12). */
export function completeSite(P, opt = {}) {
  if (!P || !P.pages || !P.pages.length) return P;
  const out = clone(P), home = out.pages[0], secs = home.sections || [], homeUrl = P.source && P.source.url;
  const items = leaves((out.menu && out.menu.items) || []).filter(m => plain(m.label) && !outside(m.href, homeUrl));
  if (!items.length) return P;
  const byType = t => secs.filter(s => s.type == t)[0];
  const cta = byType('cta'), contact = byType('contact');
  const used = {}; let n = 0;
  out.pages.forEach(p => { used[plain(p.name).toLowerCase()] = 1; });
  for (const m of items.slice(0, opt.max || 12)) {
    const label = plain(m.label), key = label.toLowerCase();
    if (used[key]) { if (key != 'home' && !/^https?:/i.test(m.href || '')) m.href = '#'; continue; }   // already has a page
    used[key] = 1; n++;
    const contactish = /\b(contact|find us|reach|location|directions|hours|visit)\b/i.test(label);
    let main = contactish && contact ? contact : Render.matchSection(P, secs, label);
    if (main && (main.type == 'hero' || main.type == 'pagehead')) main = null;
    const parts = [];
    if (main) parts.push(main);
    /* a second matching part when the words also fit another section ("Rates" → rates list + booking) */
    const second = main && Render.matchSection(P, secs.filter(s => s !== main), label);
    if (second && second !== cta && second !== contact && second.type != 'hero') parts.push(second);
    const end = main === contact ? cta : (cta || (main !== contact ? contact : null));
    if (end && !parts.includes(end)) parts.push(end);
    if (!main && contact && !parts.includes(contact)) parts.push(contact);
    const intro = main ? (main.text || main.headline || (main.items && main.items[0] && main.items[0].text)) : '';
    const sid = 'x' + n + '-';
    const page = {
      id: 'pg-' + n + '-' + key.replace(/[^a-z0-9]+/g, '-').slice(0, 24), name: label, url: /^https?:/i.test(m.href || '') ? m.href : '', status: 'new',
      sections: [{ id: sid + 'head', type: 'pagehead', title: label, text: firstLine(intro) || (P.biz && P.biz.desc) || '' }]
        .concat(parts.map((s, i) => Object.assign(clone(s), { id: sid + i + '-' + s.id })))
    };
    out.pages.push(page);
    m.href = '#';   // Site.files points "#" links named like a page at that page's file
  }
  if (!opt.enrich) return out;
  /* pitches only (opt.enrich): a thin inner page (little text came from the old site) gets the matching part of Home too,
     and every inner page ends with the Home call to action (or contact) so visitors can act on any page */
  const chars = sec => (sec.text || '').length + (sec.items || []).reduce((a, i) => a + (i.title || '').length + (i.text || '').length, 0);
  out.pages.slice(1).forEach((pg, k) => {
    const list = pg.sections || (pg.sections = []), sid = 'y' + k + '-';
    if (list.reduce((a, x) => a + chars(x), 0) < 300) {
      const add = Render.matchSection(P, secs.filter(x => x !== cta && x !== contact), pg.name);
      if (add && add.type != 'hero' && add.type != 'pagehead' && !list.some(x => x.type == add.type && x.title == add.title)) list.push(Object.assign(clone(add), { id: sid + 'm-' + add.id }));
    }
    if (!list.some(x => /^(cta|contact|booking)$/.test(x.type))) { const end = cta || contact; if (end) list.push(Object.assign(clone(end), { id: sid + 'e-' + end.id })); }
  });
  return out;
}
