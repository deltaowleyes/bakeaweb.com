/* Price comparisons shown next to every template listing (step 5) and every pitch (Pitches page and the
   prospect's preview link): what a comparable template costs at a competitor that sells templates in a
   studio like BAKE's (Framer and Webflow marketplaces), and what an agency charges for a comparable design.

   RULES so the numbers stay reliable:
   - Every range comes from a source listed in SOURCES, with the date it was checked (CHECKED).
   - Competitor template prices are in US dollars (that's how Framer and Webflow sell them);
     agency prices are Canadian-agency prices in Canadian dollars. Never convert or blend them.
   - Re-check the sources at least every 3 months and update CHECKED (see VISION.md §5). */

export const CHECKED = '2026-11-15';

export const SOURCES = {
  framer: { name: 'Framer Marketplace survey (Schmalbach, Nov 4, 2026)', url: 'https://www.vincentschmalbach.com/are-framer-templates-free/',
    says: '57 of the top 100 trending templates were free. Of the first 224 paid ones, half cost US$69 or less, a quarter US$100 or more, and none over US$149.' },
  webflow: { name: 'Webflow Marketplace, Business templates (FlowRadar listing)', url: 'https://www.flowradar.com/templates-categories/business/3',
    says: 'Business templates are listed from free to US$149, most at US$49 or US$79.' },
  shift8: { name: 'Shift8, Pricing web design in Toronto (2026)', url: 'https://shift8web.ca/?p=9533',
    says: 'Brochure sites (1–5 pages) C$3,000–7,500; small business sites (6–20 pages) C$7,500–20,000.' },
  parachute: { name: 'Parachute Design, Canadian agency budgets (2026)', url: 'https://parachutedesign.ca/blog/how-to-choose-a-web-design-agency/',
    says: 'Simple brochure site with custom design: C$10,000–30,000. Low tier, template-based: C$1,000–5,000.' },
  harmonic: { name: 'Harmonic Design, website cost in Hamilton (July 2026)', url: 'https://harmonicdesign.ca/?p=868',
    says: 'A professional custom website for a small to medium business: C$4,000–15,000.' }
};

/* One tier per grade band on the 1–99 scale (same bands people see in the studio). */
const TIERS = [
  { min: 90, tpl: { lo: 129, hi: 149, what: 'the most expensive templates on Framer and Webflow', src: ['framer', 'webflow'] },
    agency: { lo: 10000, hi: 30000, what: 'a custom-designed brochure site from a Canadian agency', src: ['parachute'] } },
  { min: 85, tpl: { lo: 100, hi: 149, what: 'a top-quarter Framer or Webflow template', src: ['framer', 'webflow'] },
    agency: { lo: 4000, hi: 15000, what: 'a custom small-business site from an Ontario agency', src: ['harmonic'] } },
  { min: 75, tpl: { lo: 49, hi: 79, what: 'a typical paid Framer or Webflow template', src: ['framer', 'webflow'] },
    agency: { lo: 3000, hi: 7500, what: 'a 1–5 page brochure site from a Toronto agency', src: ['shift8'] } },
  { min: 0, tpl: { lo: 0, hi: 49, what: 'a free or low-cost Framer or Webflow template', src: ['framer', 'webflow'] },
    agency: { lo: 1000, hi: 5000, what: 'a basic template-based site from a Canadian agency', src: ['parachute'] } }
];

const n = v => Number(v).toLocaleString('en-US');
export const usd = (lo, hi) => (lo ? 'US$' + n(lo) : 'Free') + '–' + n(hi);
export const cad = (lo, hi) => 'C$' + n(lo) + '–' + n(hi);

/* compare(grade, price) → { tpl, agency, below: {tpl, agency}, sources } or null if not offered.
   below.tpl / below.agency say whether BAKE's price is at or under the top of that range. */
export function compare(grade, price) {
  if (price == null) return null;
  const t = TIERS.find(x => (+grade || 0) >= x.min);
  const keys = [...new Set(t.tpl.src.concat(t.agency.src))];
  return {
    tpl: { ...t.tpl, label: usd(t.tpl.lo, t.tpl.hi) },
    agency: { ...t.agency, label: cad(t.agency.lo, t.agency.hi) },
    below: { tpl: price <= t.tpl.hi, agency: price <= t.agency.lo },
    sources: keys.map(k => SOURCES[k])
  };
}

/* The same comparison as plain HTML (Pitches page and prospect preview, which aren't React). */
export function compareHtml(grade, price, money, { forProspect, deal } = {}) {
  const c = compare(grade, price); if (!c) return '';
  const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
  /* Launch-week discount (lib/launch.js): show the regular price struck through and today's price. */
  const sale = price && deal ? Math.round(price * (100 - deal.pct) / 100) : null;
  const ours = !price ? esc('Free')
    : sale != null ? `<s style="opacity:.6;font-weight:400">${esc(money(price))}</s> ${esc(money(sale))} one time <span class="cmp-deal" style="display:inline-block;background:#c2410c;color:#fff;border-radius:999px;padding:1px 9px;font-size:.8em;margin-left:4px">${deal.pct}% off today</span>`
    : esc(money(price) + ' one time');
  return `<div class="cmp"><div class="cmp-row"><span class="cmp-k">${forProspect ? 'With BAKE' : 'BAKE'}</span><b>${ours}</b></div>
    <div class="cmp-row"><span class="cmp-k">Template elsewhere</span><span>${esc(c.tpl.label)} <small>(${esc(c.tpl.what)}; you set it up yourself)</small></span></div>
    <div class="cmp-row"><span class="cmp-k">Agency</span><span>${esc(c.agency.label)} <small>(${esc(c.agency.what)})</small></span></div>
    <details><summary>Where these numbers come from (checked ${CHECKED})</summary><ul>${c.sources.map(s => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>: ${esc(s.says)}</li>`).join('')}</ul>
    <p>Template prices are in US dollars, agency prices in Canadian dollars. Prices vary; these are published ranges, not quotes.</p></details></div>`;
}
