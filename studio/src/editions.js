/* BAKE's two Studios (VISION.md §2, vision talk 2, 2026-11-08).
   - BAKE Studio PRO: for clients, anyone making a site.
   - BAKE Studio BAKER: for Bakers; everything in PRO plus the four markets.
   S.edition holds the choice ('pro' | 'baker'); ?v=pro or ?v=baker in the address sets it.
   EXPRESS and RezSite are no longer Studios: they became free addresses (bakedby.me, rezsite.com) chosen at Publish.
   Old saved projects and links with express, rezsite or indigihub open in PRO. */
export const STUDIOS = {
  pro: {
    name: 'PRO', full: 'BAKE Studio PRO', who: 'For clients: anyone making a site',
    blurb: 'Try every template, section and extension, premium ones included. Pay only for what you use when you publish or download the code.'
  },
  baker: {
    name: 'BAKER', full: 'BAKE Studio BAKER', who: 'For Bakers: the experts',
    blurb: 'Everything in PRO, plus the markets: sell templates, sections and extensions, bid on tasks and build your portfolio on bakedbya.pro.',
    markets: true
  }
};
export const STUDIO_KEYS = Object.keys(STUDIOS);

/** Any saved or typed version name → one of the two Studios. Only 'baker' stays BAKER; everything else is PRO. */
export function normStudio(k) { return k == 'baker' ? 'baker' : 'pro'; }
export function studio(S) { return STUDIOS[normStudio(S.edition)]; }

/** The four markets of the BAKER Studio (placeholders until accounts and the markets exist). */
export const MARKETS = [
  { k: 'services', name: 'Services', blurb: 'Bid on tasks clients post.' },
  { k: 'templates', name: 'Templates', blurb: 'Make and submit whole-site templates.' },
  { k: 'sections', name: 'Sections', blurb: 'Make and submit section designs.' },
  { k: 'extensions', name: 'Extensions', blurb: 'Make and submit add-ons for sites.' }
];

/** Where a site can live, chosen at Publish (VISION.md §1). */
export const DESTS = {
  bakedby: { name: 'bakedby.me', host: 'bakedby.me', blurb: 'Free for anyone. You pay only the cart.' },
  rezsite: { name: 'rezsite.com', host: 'rezsite.com', blurb: 'Free for First Nations, Métis and Inuit people, businesses and communities, with lower prices.' },
  own: { name: 'Your own domain', host: '', blurb: 'A new domain (+$50 plus its price) or one you already own (+$100).' }
};
export const DEST_KEYS = Object.keys(DESTS);

/* Premium check. The cart (lib/cart.js, separate task) plugs in here with setPremiumCheck(fn):
   fn(S) returns true when the project uses a premium item that isn't paid for yet.
   Until then nothing is premium, so every preview is live. */
let premiumCheck = () => false;
export function setPremiumCheck(fn) { premiumCheck = typeof fn == 'function' ? fn : () => false; }
export function hasUnpaidPremium(S) { try { return !!premiumCheck(S); } catch (e) { return false; } }

/** Live page (with View code) for free and paid items; screenshots when an unpaid premium item is in use,
    so its code can't be copied before it's bought. The same in both Studios. */
export function livePreview(S) { return !hasUnpaidPremium(S); }

/* Old names, kept so other code keeps working. */
export const EDITIONS = STUDIOS;
export const EDITION_KEYS = STUDIO_KEYS;
export const edition = studio;
