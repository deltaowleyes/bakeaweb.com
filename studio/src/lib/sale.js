/* Pitch prices and the pitch sale (decided 2026-11-19, replaces the Nov 16–20 launch-week discount).
   All prices are in Canadian dollars.

   PITCH PRICES (a design made for one business, sold from its preview link), by the design's rating out of 99:
     86 $50 · 87 $60 · 88 $70 · 89 $85 · 90 $100 · 91 $125 · 92 $150 · 93 $175 · 94 $200 · 95 $250 · 96 $300 · 97 $450 · 98 $600 · 99 $800
     Below 86 a pitch costs the lowest pitch price ($50).
   (Template prices in the studio are in lib/render.js PRICE_BY_GRADE: under 90 free, 90 $25 … 99 $200.)

   THE SALE starts when we email the pitch from the Pitches admin page (redesign_pitches.emailed_at):
     first 24 hours 50% off, next 24 hours 40%, then 30%, 20%, 10%, and regular price from day 6.
   The server works out the same price in order_shared_pitch() (bake_pitch_price_for + bake_pitch_sale_pct),
   so it can't be changed in the browser. Keep the two in step. */

export const PITCH_PRICE_BY_GRADE = { 86: 50, 87: 60, 88: 70, 89: 85, 90: 100, 91: 125, 92: 150, 93: 175, 94: 200, 95: 250, 96: 300, 97: 450, 98: 600, 99: 800 };
export const PITCH_MIN = 86;

/* Regular price of a pitch design from its grade. */
export function pitchPriceFor(g) {
  g = Math.floor(+g || 0);
  if (g < PITCH_MIN) return PITCH_PRICE_BY_GRADE[PITCH_MIN];
  return PITCH_PRICE_BY_GRADE[Math.min(g, 99)];
}

const DAY = 86400000;
export const SALE_STEPS = [50, 40, 30, 20, 10];

/* pitchDeal(emailedAt, now) → { pct, next, msLeft, endsAt } or null (not emailed yet, or the sale is over). */
export function pitchDeal(emailedAt, now = new Date()) {
  if (!emailedAt) return null;
  const t0 = new Date(emailedAt).getTime(), t = new Date(now).getTime();
  if (!isFinite(t0) || t < t0) return null;
  const day = Math.floor((t - t0) / DAY), pct = SALE_STEPS[day];
  if (!pct) return null;
  const endsAt = t0 + (day + 1) * DAY;
  return { pct, next: SALE_STEPS[day + 1] || 0, msLeft: endsAt - t, endsAt: new Date(endsAt) };
}

/* The price after the sale (whole dollars). Free and not-offered stay as they are. */
export function salePrice(price, deal) {
  if (!price || !deal) return price;
  return Math.round(price * (100 - deal.pct) / 100);
}

/* "9h 41m" (or "1d 3h") until the price steps down. */
export function timeLeft(ms) {
  const m = Math.max(0, Math.floor(ms / 60000)), h = Math.floor(m / 60);
  return h >= 24 ? `${Math.floor(h / 24)}d ${h % 24}h` : h ? `${h}h ${m % 60}m` : `${m % 60}m`;
}

/* One-line banner text for prospects. */
export function dealLine(deal) {
  if (!deal) return '';
  const then = deal.next ? ` After that it's ${deal.next}% off.` : ' After that, the regular price returns.';
  return `${deal.pct}% off for the next ${timeLeft(deal.msLeft)}.${then}`;
}
