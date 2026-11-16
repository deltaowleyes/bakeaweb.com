/* Launch-week discount (decided 2026-11-16): the discount is the one for the day the customer buys,
   ending at midnight Eastern time (America/New_York) each day.
   Mon Nov 16: 50% off · Tue Nov 17: 40% · Wed Nov 18: 30% · Thu Nov 19: 20% · Fri Nov 20: 10% · then regular price. */

export const LAUNCH = { '2026-11-16': 50, '2026-11-17': 40, '2026-11-18': 30, '2026-11-19': 20, '2026-11-20': 10 };
const TZ = 'America/New_York';
const DAYS = Object.keys(LAUNCH).sort();

/* The calendar date (YYYY-MM-DD) and time in Eastern time for a moment. */
function eastern(now) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-CA', { timeZone: TZ, year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hourCycle: 'h23' })
    .formatToParts(now).map(x => [x.type, x.value]));
  return { day: `${p.year}-${p.month}-${p.day}`, secs: (+p.hour) * 3600 + (+p.minute) * 60 + (+p.second) };
}

/* launchDeal(now) → { pct, day, weekday, next, nextWeekday, msLeft } or null when no launch discount applies. */
export function launchDeal(now = new Date()) {
  const e = eastern(now), pct = LAUNCH[e.day];
  if (!pct) return null;
  const i = DAYS.indexOf(e.day), next = DAYS[i + 1] ? LAUNCH[DAYS[i + 1]] : 0;
  const wd = d => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { weekday: 'long', timeZone: 'UTC' });
  return { pct, day: e.day, weekday: wd(e.day), next, nextWeekday: DAYS[i + 1] ? wd(DAYS[i + 1]) : '', msLeft: (86400 - e.secs) * 1000 };
}

/* The price after today's launch discount (whole dollars). Free and not-offered stay as they are. */
export function salePrice(price, deal = launchDeal()) {
  if (!price || !deal) return price;
  return Math.round(price * (100 - deal.pct) / 100);
}

/* "9h 41m" until midnight Eastern. */
export function timeLeft(ms) {
  const m = Math.max(0, Math.floor(ms / 60000)), h = Math.floor(m / 60);
  return h ? `${h}h ${m % 60}m` : `${m % 60}m`;
}

/* One-line banner text for prospects. */
export function dealLine(deal = launchDeal()) {
  if (!deal) return '';
  const when = 'before midnight tonight (Eastern time)';
  const then = deal.next ? ` On ${deal.nextWeekday} it's ${deal.next}% off.` : ' After tonight, regular prices return.';
  return `Launch week: ${deal.pct}% off if you buy ${when}.${then}`;
}
