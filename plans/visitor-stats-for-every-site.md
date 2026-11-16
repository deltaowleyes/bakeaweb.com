# Visitor stats for every site

Plan for the roadmap task **Visitor stats for every site** (`visitor-stats-for-every-site`).
Written 2026-11-16. **Waiting for the owner's OK.** Nothing is built yet.

## 1. What you'll get

- In **BAKER Admin** (bakeaweb.com/?v=baker#admin), every published site gets new columns: **views today**, **last 7 days**, **last 30 days** and the **monthly average over the last 3 months**.
- That 3-month average shows the site's **badge-removal tier** (VISION.md §5: up to 2,000 views a month is $5, 2,000–10,000 is $15, 10,000–50,000 is $40, 50,000+ is quoted). This is the number that bills will be based on.
- Click a site to see a 30-day chart, its **top pages**, **where visitors came from** (Google, Facebook, a direct visit, another site), **country** and **phone or computer**.
- Later, once Maker accounts exist, each owner sees the same numbers for their own site in the Studio, so there are no surprise bills.

## 2. How it works (plain language)

Every visit to `name.rezsite.com`, `name.bakedby.me` or `bakedbya.pro/name/` already passes through the **bake-host** Worker, the small program on Cloudflare that serves the site's files. It sees every request, even when the page comes from Cloudflare's cache.

1. When the Worker sends back a **page**, it adds one to that site's count for today. It doesn't count the page's images, fonts or styles.
2. It sends the count to Supabase **after** the page has gone to the visitor (`ctx.waitUntil`), so visitors never wait for it. If Supabase is slow or down, the page still loads and only that one view is missed.
3. Supabase keeps **one row per site, per page, per day** with a running total. It doesn't keep a row for every visit, so the database stays small.
4. BAKER Admin reads those totals, the same way it already reads `published_sites`.

## 3. What counts as a page view

A request is counted only when all of these are true:

| Rule | Why |
|---|---|
| It's a `GET` (not `HEAD`) | Link checkers and uptime monitors often use HEAD |
| The answer is an **HTML page** with status 200 | Images, fonts, styles, 404s and redirects don't count |
| It isn't a **known bot** (user agent matches a list: Googlebot, Bingbot, AhrefsBot, SemrushBot, facebookexternalhit, Slackbot, Twitterbot, curl, python-requests, headless browsers and others) | Search engines and link previews aren't people |
| It isn't a **prefetch** (`Sec-Purpose: prefetch` or `Purpose: prefetch`) | Browsers load some links ahead of time "just in case" |
| It isn't BAKE's own **live check** (the Admin "Live?" check and the Testing robot add `?bake-check=1`) | Our own tools shouldn't inflate anyone's bill |

This is the same "page views, not hits" rule written in VISION.md §5. The free Cloudflare plan has no paid bot scoring, so a few disguised bots will still get through. That's the same for every site, and it's why billing uses a 3-month average with a month's notice before a tier changes.

## 4. Privacy

- **No cookies and no tracking script on the page**, so there's no cookie banner. Counting happens on the server.
- **No IP addresses are stored**, and nothing that identifies a person. Only totals are kept: counts per page, the referring **website name** (for example `google.com`, never the full link), the **country** Cloudflare already provides, and **phone/tablet/computer** worked out from the browser name.
- This fits the RezSite promise that community data is never sold. Supabase is the same place the rest of BAKE's data already lives.

## 5. What gets built

| Part | Change |
|---|---|
| **Supabase** (one migration) | Table `site_views_daily` (domain, pagename, day, path, views). Table `site_sources_daily` (domain, pagename, day, kind = referrer, country or device, value, views). A function `count_view(...)` that adds 1 with a single "insert, or add one if it's already there". View `site_views_summary` with today, 7 days, 30 days, the 3-month monthly average and the tier. Only admins can read; only the Worker can write (next row). |
| **Worker security** | `count_view` checks a long random **count key**. The Worker keeps the key as a Cloudflare secret (`BAKE_COUNT_KEY`), so nobody on the internet can call it to inflate a rival's count or someone's bill. |
| **host/worker.js** | The counting rules from §3, then one `fetch` to Supabase inside `ctx.waitUntil`. About 40 lines. |
| **.github/workflows/host.yml** | Copies the GitHub secret `BAKE_COUNT_KEY` into the Worker on each deploy. |
| **BAKER Admin** (`studio/src/admin/Admin.jsx`) | New columns and the click-to-open detail panel with a small 30-day chart. React + Tailwind, like the rest of Admin. |
| **Live check + tests** | Add `?bake-check=1` to Admin's live check. A Testing robot test makes sure images, 404s, bots and live checks are **not** counted and a normal page **is**. |

## 6. Costs

All of this fits within free plans at today's size.

- **Cloudflare Workers Free:** 100,000 requests a day, and the Worker already handles every request to these sites. Counting adds **no extra Worker requests**. Each counted page makes one call out to Supabase, and calls out don't count as requests.
- **Supabase Free:** 500 MB database and no charge per API call. Estimate: 200 sites × about 6 pages visited × 365 days ≈ 440,000 small rows a year, about **60–80 MB**, plus the sources table at about the same size again. Totals older than 13 months can be rolled up into monthly rows to keep the database small.
- **When it grows:** the real limit is the Worker's 100,000 requests a day, counting every image too. When member sites get close to that, it's time for **Workers Paid (US$5 a month, 10 million requests)**, as VISION.md already plans. If Supabase ever becomes the bottleneck, **Workers Analytics Engine** (Cloudflare's built-in counter: 100,000 data points a day free) is the backup. It keeps data for only about 3 months, though, so daily totals would still be copied to Supabase.

## 7. What you'd need to do

One step, about 2 minutes. I'll give you BAKE buttons with links:

1. Add a GitHub secret named `BAKE_COUNT_KEY` (I'll generate the long random value for you) at github.com/deltaowleyes/bakeaweb.com → Settings → Secrets and variables → Actions.

I do everything else: the backup branch, the Supabase migration, the Worker, Admin, tests and publishing.

## 8. Risks

- **Missed views:** if Supabase is unreachable, those views aren't counted. Counts may come out a little low, but never high, which is the safe direction for billing.
- **Bots that pretend to be browsers** slip through (§3). The 3-month average smooths out short bursts.
- **Sudden traffic spikes** (a post goes viral) could hit the free plan's 100,000 requests a day. The page would then fail for the rest of that day, counting or not. Set a Cloudflare usage notification now so that doesn't come as a surprise.
- **Two counters disagree:** bakeaweb.com itself uses Cloudflare Web Analytics, which was set up 2026-11-16. Member sites use this counter. The numbers are measured differently, so they shouldn't be compared directly.

## 9. Questions for you

1. **Unique visitors too?** Page views are enough for billing. "How many different people" needs a daily anonymous fingerprint that is thrown away every night (the method Plausible uses). It's still privacy-friendly, but a little more work. Recommended: **later**.
2. **Show owners their stats now or later?** There are no Maker logins yet, so for now only admins see them. Option: a private stats link per site, like the pitch preview links.
3. **When does billing start?** Recommended: collect counts for **3 months before charging anyone**, so the first tier is based on real numbers.
4. **Count pitch preview links?** Those are on bakeaweb.com, which Cloudflare Web Analytics now covers, and the Pitches page already tracks opens. Recommended: no extra counting.

## 10. Size

Medium: about one session to build, test and publish after your OK and the one secret.
