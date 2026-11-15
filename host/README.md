# BAKE Host: free addresses for published sites

Published sites live at:

| Address | Who it's for |
|---|---|
| `pagename.rezsite.com` | First Nations, Métis and Inuit people, businesses and communities |
| `pagename.bakedby.me` | Anyone |
| `bakedbya.pro/pagename/` (also `pagename.bakedbya.pro`) | Baker portfolios, e.g. `bakedbya.pro/greyowl/` |

**Cost: $0.** Cloudflare's free plan includes proxied wildcard DNS, free SSL for `*.domain`, and Workers (100,000 requests a day). Supabase's free plan stores the files (1 GB).

## How it works

1. **Publish** in BAKE Studio BAKER → **Admin** (`bakeaweb.com/?v=baker#admin`, admins only). `studio/src/lib/publish.js` builds every page with `Site.files()` and uploads them to the public Supabase Storage bucket **`sites`** at `<domain>/<pagename>/<file>`, then writes a row in the table **`published_sites`** (row-level security: only `rezsite_admins` can write either).
2. **Serve**: the Cloudflare Worker `host/worker.js` (named `bake-host`) runs on `*.rezsite.com/*`, `*.bakedby.me/*`, `bakedbya.pro/*` and `*.bakedbya.pro/*`. It reads the file from Storage, sets the right content type and caches it for 60 seconds, so a republish shows within about a minute.
3. Anything that isn't a published site (`www`, the plain domains, unknown paths on bakedbya.pro) goes on to the domain's normal website (GitHub Pages), so nothing that works today breaks. Unknown subdomains show a small "Page not found" page.
4. **Deploy**: `.github/workflows/host.yml` (Actions → *BAKE Host*) runs `setup-dns.mjs` (adds the proxied `*` record, proxies the plain domain, sets SSL to *Full*) and `wrangler deploy`. It runs on every push that changes `host/`, or by hand.

## One-time setup (the owner)

Only `rezsite.com`, `bakedby.me` and `bakedbya.pro` move to Cloudflare. **bakeaweb.com stays exactly as it is.** The domains stay registered at Porkbun; only who answers their DNS changes. Existing records (GitHub Pages, Porkbun email forwarding MX records) are copied across, so email forwarding keeps working.

1. **Cloudflare account (free):** https://dash.cloudflare.com/sign-up
2. **Move the 3 domains' DNS to Cloudflare:** in Porkbun use **Connect Cloudflare** (https://porkbun.com/account/connectCloudflare), or in Cloudflare *Add a domain* → **Free** plan, then paste Cloudflare's two nameservers into Porkbun → Domain Management → the domain → *Authoritative Nameservers*.
3. **API token:** https://dash.cloudflare.com/profile/api-tokens → *Create Token* → template **Edit Cloudflare Workers** → *Use template* → add two permission rows: **Zone · DNS · Edit** and **Zone · Zone Settings · Edit** → *Zone Resources*: **All zones** → *Continue to summary* → *Create Token* → copy it.
4. **Account ID:** Cloudflare dashboard → click any of the 3 domains → right-hand column, *API* → **Account ID** → copy.
5. **GitHub secrets:** https://github.com/deltaowleyes/bakeaweb.com/settings/secrets/actions → *New repository secret* → `CLOUDFLARE_API_TOKEN` (the token) and `CLOUDFLARE_ACCOUNT_ID` (the ID).
6. Run **Actions → BAKE Host → Run workflow** (or ask Claude to). Admin's "Status" column turns from *Uploaded · address not active yet* to **Live**.

## Later

- Own domains (+$50 / +$100) can use the same Worker with Cloudflare for SaaS custom hostnames (free for the first 100).
- When paying customers publish themselves, the same `publishSite()` runs after checkout instead of from Admin.
