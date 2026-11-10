# BAKE Host: where every site lives

Plan for the roadmap task **BAKE Host: where every site lives** (`bake-host-where-every-site-lives`).
Written 2026-11-09. **Approved by the owner 2026-11-10.** Nothing is built or switched yet: next is the owner's checklist (section 3).

## 1. The decision (owner, 2026-11-09)

- **Member sites move to Cloudflare now**, not "before launch".
- **Addresses are subdomains:** `yourname.rezsite.com` and `yourname.bakedby.me` (not `rezsite.com/yourname`), and Baker portfolios at `bakername.bakedbya.pro` (added 2026-11-10).
- **Order:** bakedby.me first, then rezsite.com, then bakedbya.pro.
- **Workers Paid ($5 a month) from day one.**
- **Sites are never published to GitHub repositories** (2026-11-10). Makers who want their files use code download.
- **One Worker** (a small program on Cloudflare) serves every member site from **R2** (Cloudflare's file storage).
- **bakeaweb.com stays on GitHub Pages** for now. It's one site and well within GitHub's limits.

Why: GitHub Pages allows 1 GB and a soft 100 GB of traffic a month per site, shared by every member on a domain, and it isn't meant to be a free host for many people's sites. Cloudflare charges for use instead, with no data-transfer fees, and a catch-all subdomain is safe there.

## 2. How it will work (plain language)

```
visitor types sunrise.rezsite.com
        │
        ▼
Cloudflare DNS: one catch-all record  *.rezsite.com  (proxied, orange cloud)
        │
        ▼
BAKE Host Worker: reads "sunrise" and "rezsite.com" from the address
        │
        ▼
R2 storage: files saved under  rezsite.com/sunrise/index.html, …/images/…
        │
        ▼
the page comes back to the visitor (with a free HTTPS padlock)
```

- **Adding a member = uploading their files.** There are no new DNS records, no new GitHub repos and no waiting.
- **HTTPS is free and automatic.** Cloudflare's free certificate covers the main domain and every first-level subdomain (`sunrise.rezsite.com`). That's why pagenames can't contain dots.
- **The home pages stay where they are during the switch.** `rezsite.com`, `www.rezsite.com`, `bakedby.me` and `www.bakedby.me` keep pointing at GitHub Pages ("DNS only", grey cloud), so nothing visitors see today changes. Specific records always win over the catch-all record, so `www` is never sent to the Worker by mistake.
- **Reserved names never reach a member:** `www`, `mail`, `admin`, `api`, `app`, `studio`, `help`, `status`, `ftp`, `smtp` and the brand names. The Worker shows the BAKE "not found" page for them, and the Studio refuses them at sign-up.
- **Unknown names** (`nobody.rezsite.com`) get a friendly "This site doesn't exist yet. Make it with BAKE" page that links to bakeaweb.com.
- **Taken-down sites** get a "This site is unavailable" page. A takedown is one flag in storage, so the trust-and-safety queue can act in seconds.

## 3. Your checklist (the owner)

Do these in order. Each step says where to click. **Stop at step 5** and tell me, so I can check the records before anything is switched.

**Before you start**
1. **Make the Cloudflare account.** Go to https://dash.cloudflare.com/sign-up and use the email you want BAKE's business accounts under. Click the link in Cloudflare's "verify your email" message first, then turn on two-step sign-in (**My Profile → Authentication**) and save the backup codes somewhere safe: https://developers.cloudflare.com/fundamentals/user-profiles/2fa/
2. **Take a picture of today's settings at Porkbun** (your "undo" copy). Log in at https://porkbun.com/account/domainsSpeedy. For **bakedby.me**, **rezsite.com** and **bakedbya.pro**:
   - click **Details**, then **DNS Records**, and take a screenshot of the whole list;
   - click **Email** and screenshot any email forwarding addresses;
   - note whether **DNSSEC** is on (it's in the Details panel). If it is, tell me before going further. It must be turned off before the nameservers change, or the domain stops working.

**Add the domains to Cloudflare (nothing changes yet)**

3. In Cloudflare, click **Add a domain**, type **bakedby.me**, choose the **Free** plan, and let it scan your records. Guide: https://developers.cloudflare.com/fundamentals/manage-domains/add-site/
4. On the record list Cloudflare shows you, set the records for `bakedby.me` and `www` to **DNS only** (grey cloud). Leave everything else as Cloudflare found it, and **don't click "Continue" to the nameserver step yet.**
5. **Stop and send me a screenshot of that list**, plus your Porkbun screenshots from step 2. I'll check record by record that the website, the GitHub check and any email forwarding came across.

**Switch bakedby.me first (it's the lower-risk domain)**

6. Cloudflare will show you **two nameserver names** (like `kate.ns.cloudflare.com`). At Porkbun, open bakedby.me → **Details** → **Nameservers** → edit, delete Porkbun's four, and paste Cloudflare's two. Guide: https://kb.porkbun.com/article/22-how-to-change-your-nameservers
7. Wait for Cloudflare's "**bakedby.me is now active**" email. That's usually under an hour, but can take up to 48 hours. The site and email keep working throughout, because both providers have the same records during the change.

**Turn on the tools I'll use (once, for the whole account)**

8. **Workers Paid plan, $5 USD a month:** https://dash.cloudflare.com/?to=/:account/workers/plans. Cloudflare asks for a card. The free plan stops serving sites partway through a busy day, which is why I recommend paying.
9. **R2 storage:** in the dashboard, open **R2 Object Storage** and click **Get started** (or **Purchase R2 plan**, which is free up to 10 GB). It may ask for the same card.
10. **Give me a key, the safe way.** Create an API token at https://dash.cloudflare.com/profile/api-tokens using **Create Custom Token**, with these permissions:
    - Account → **Workers Scripts: Edit**
    - Account → **Workers R2 Storage: Edit**
    - Zone → **Workers Routes: Edit** and **DNS: Edit**, for **bakedby.me**, **rezsite.com** and **bakedbya.pro** only

    **Don't paste it into a chat.** Save it in GitHub instead: https://github.com/deltaowleyes/bakeaweb.com/settings/secrets/actions → **New repository secret** → name `CLOUDFLARE_API_TOKEN`, then paste. Add a second secret, `CLOUDFLARE_ACCOUNT_ID`. The account ID is on the right side of your Cloudflare dashboard's home page. The deploy runs on GitHub, so the key never passes through me.

**Then rezsite.com**

11. Once `demo.bakedby.me` works (I'll tell you), repeat steps 3–7 for **rezsite.com**, then for **bakedbya.pro**. Their token permissions are already in step 10.

**If anything goes wrong, here's how to undo it:** at Porkbun, set the domain's nameservers back to Porkbun's defaults ("Use Our Default Nameservers"). Porkbun still has every record from before, so things return to how they were within a few hours.

## 4. What I'll build (after your OK and steps 1–10)

All of it goes in the bakeaweb.com repo, tested before anything goes live.

| Piece | What it does |
|---|---|
| `host/worker.js` | The BAKE Host Worker: address → member files in R2, plus the "not found", "reserved" and "unavailable" pages, security headers, and caching so repeat visits are cheap |
| `host/wrangler.toml` | Its settings: the R2 bucket `bake-sites` and the routes `*.bakedby.me/*`, `*.rezsite.com/*` and `*.bakedbya.pro/*` |
| `.github/workflows/host.yml` | Deploys the Worker from GitHub using your saved key, only after its tests pass |
| `studio/tests/host*.spec.js` | Tests: a real member page, an unknown name, a reserved name, a taken-down site, images and CSS load |
| Catch-all DNS records | `*` on each domain, proxied, pointing at the Worker (I'll add these with the token; you won't need to) |
| `demo.bakedby.me` | A real example site made with BAKE, to prove it end to end |
| Pagename rules | The Studio's sign-up check uses the same reserved list, and pagenames can't end with a hyphen, because subdomains can't |

**Changes to other planned tasks (for your OK):**
- **Free publish to bakedby.me and rezsite.com:** the Supabase function uploads the site's files to R2 (key kept on the server) instead of writing to a GitHub repo, and the live link becomes `pagename.domain`.
- **A repository for every pagename:** dropped. The owner decided on 2026-11-10 that sites are never published to GitHub repositories, so Makers who want their files use code download.
- **BAKER portfolios on bakedbya.pro:** decided 2026-11-10. The same Worker serves `bakername.bakedbya.pro` (clickable screenshot pages, as planned).
- **Pagename email addresses:** once the DNS is on Cloudflare, Cloudflare Email Routing becomes one more free option to compare. Nothing changes now.
- **Old `/pagename` links:** no member sites exist yet, so nothing needs forwarding today. If any demo pages exist at `bakedby.me/demo/`, I'll add a free Cloudflare redirect to `demo.bakedby.me`.

## 5. What it costs

Prices in US dollars, checked 2026-11-09. The guess per member: a 25 MB site, 1,000 page views a month, 10 files per page view, so about **10,000 file requests a month**.

| Members | File requests a month | Stored | Estimated monthly cost |
|---|---|---|---|
| 100 | about 1 million | 2.5 GB | **$5** (Workers Paid; R2 within its free tier) |
| 1,000 | about 10 million | 25 GB | **about $5–6** |
| 10,000 | about 100 million | 250 GB | **about $40–70** (budget $100) |
| 1,000,000 | about 10 billion | 25 TB | **a few thousand dollars a month**. Revisit the design (more caching, possibly Workers for Platforms) at around 100,000 members. |

- **Workers:** $5/month includes 10 million requests and 30 million CPU milliseconds, then $0.30 per extra million requests and $0.02 per extra million CPU ms. https://developers.cloudflare.com/workers/platform/pricing/
- **R2:** $0.015 per GB a month, $4.50 per million uploads, $0.36 per million reads, and **no charge for data sent to visitors**. Each month is free up to 10 GB, 1 million uploads and 10 million reads. https://developers.cloudflare.com/r2/pricing/
- **DNS, HTTPS certificates and the catch-all record:** free on the Free plan.
- **What stays the same:** domain registration and renewals stay at Porkbun at the same price.
- **Cost is driven by visitors, not by the number of subdomains.** 10,000 quiet sites can cost less than 100 very popular ones. I'll add a Cloudflare spending alert so a surprise bill can't happen.

## 6. Keeping email and today's sites working during the switch

- **Email:** if any of the three domains uses Porkbun email forwarding, it depends on two MX records (`fwd1.porkbun.com` priority 10 and `fwd2.porkbun.com` priority 20) and an SPF text record that includes `_spf.porkbun.com`. Cloudflare's scan usually copies them, and I check each one against your Porkbun screenshot in step 5. If any are missing, we add them before switching. Porkbun forwarding keeps working with Cloudflare as long as those records are there. Guide: https://kb.porkbun.com/article/47-how-to-use-porkbun-email-when-your-dns-is-hosted-elsewhere
- **Websites:** the main and `www` records stay "DNS only", pointing at GitHub Pages, so today's home pages don't change. GitHub's domain-check record (a TXT record starting with `_github-pages-challenge`), if it exists, is copied too.
- **One domain at a time:** bakedby.me first, then rezsite.com after `demo.bakedby.me` works, then bakedbya.pro.
- **Undo** is one change at Porkbun (section 3).

## 7. Risks and how they're handled

| Risk | How we handle it |
|---|---|
| A scammer publishes a fake bank page on a BAKE subdomain, and Cloudflare suspends the account | Trust-and-safety checks before every publish, a report link on every site, one-flag takedowns (the "Trust and safety" task). It matters even more now that all member sites share one Cloudflare account. |
| A surprise bill from a viral site | Spending alert, caching in the Worker, and a per-site traffic limit we can switch on |
| Video files make sites heavy | Members embed video (YouTube, Vimeo, or Cloudflare Stream later) instead of uploading large files |
| Email stops during the switch | Record-by-record check in step 5, and one-step undo |
| A second-level name like `a.b.rezsite.com` | Not allowed: pagenames have no dots (the free certificate covers only one level) |
| Someone else's GitHub site appears on a BAKE subdomain | The catch-all record points at Cloudflare, not GitHub, so GitHub's wildcard warning doesn't apply |

## 8. Owner's answers (2026-11-10)

1. **bakedbya.pro moves too**, as `bakername.bakedbya.pro`.
2. **bakedby.me first, then rezsite.com** (then bakedbya.pro).
3. **Workers Paid at $5 a month** from day one.
4. **No publishing to GitHub repositories**, so "A repository for every pagename" is dropped.

## Sources

- GitHub Pages limits: https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
- Cloudflare wildcard DNS records: https://developers.cloudflare.com/dns/manage-dns-records/reference/wildcard-dns-records/
- Cloudflare Workers routes: https://developers.cloudflare.com/workers/configuration/routing/routes/
- Cloudflare Universal SSL: https://developers.cloudflare.com/ssl/edge-certificates/universal-ssl/
- Cloudflare Workers pricing: https://developers.cloudflare.com/workers/platform/pricing/
- Cloudflare R2 pricing: https://developers.cloudflare.com/r2/pricing/
- Change nameservers at Porkbun: https://kb.porkbun.com/article/22-how-to-change-your-nameservers
- Porkbun email with DNS elsewhere: https://kb.porkbun.com/article/47-how-to-use-porkbun-email-when-your-dns-is-hosted-elsewhere
