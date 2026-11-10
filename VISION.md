# BAKE: vision

BAKE is a home on the web for everyone, in the spirit of GeoCities but built for today. Anyone can design a site in **BAKE Studio** and try every template, section and extension free, premium ones included. Anything premium they use goes into a **cart**, and they pay only when they publish or download the code. A site that uses only free items publishes free. Indigenous people and communities get their own free address with lower prices. Experts, called **Bakers**, have their own Studio where they build, sell their work and get hired. This file is the business plan the code is built toward. `ARCHITECTURE.md` describes what exists today (the two Studios are in place since 2026-11-08; the cart and accounts are next), and `ROADMAP.md` lists every task.

Updated 2026-11-10 (no publishing to GitHub; RezSite discount needs Nation verification; successful help = Maker approves; 2026-11-09: Makers, Starters and Request help; BAKE Host: member sites move to Cloudflare with subdomains; plan in `plans/bake-host-where-every-site-lives.md`). Previously updated 2026-11-08 (vision talk 2: two Studios and a cart; log in `plans/vision-talk.md`).

## 1. The four domains

All four are registered at **Porkbun**.

| Domain | What lives there | Example address |
|---|---|---|
| **bakeaweb.com** | The home of BAKE: **BAKE Studio PRO** (for clients) and **BAKE Studio BAKER** (for Bakers), the home page, accounts, the markets, the admin control room | `bakeaweb.com` |
| **bakedby.me** | The **free address for anyone** | `pagename.bakedby.me` |
| **rezsite.com** | The **free address for First Nations, Métis and Inuit** people, businesses and communities (**RezSite**), with lower prices | `pagename.rezsite.com` |
| **bakedbya.pro** | **Baker portfolios**: examples of each Baker's work, built in the BAKER Studio | `bakername.bakedbya.pro` |

A site can also live on the client's **own domain** (a new one bought through Porkbun, or one they already own).

Addresses are **subdomains** (`pagename.bakedby.me`, `pagename.rezsite.com`, `bakername.bakedbya.pro`), not paths (changed 2026-11-09; bakedbya.pro added 2026-11-10). Member sites and Baker portfolios are served by **Cloudflare** (§9, Hosting); bakeaweb.com itself stays on GitHub Pages for now.

## 2. Two Studios

EXPRESS and RezSite are no longer Studio versions (changed 2026-11-08). They became **free addresses** (bakedby.me, rezsite.com) that anyone designing in the Studio can choose when publishing.

| Studio | Who it's for | What's included |
|---|---|---|
| **BAKE Studio PRO** | Clients: anyone making a site | The full Studio, every free and premium template, section and extension to try, the cart, AI images, hiring Bakers, publishing to bakedby.me, rezsite.com or their own domain, code download |
| **BAKE Studio BAKER** | Bakers (the experts) | **Everything in PRO**, plus the four markets (services, templates, sections, extensions): make and submit templates, sections and extensions, bid on tasks, build portfolio pieces for bakedbya.pro, a public profile and reviews |

- **Anyone can use the BAKER Studio** to practise. Someone who wants to become a Baker starts as a **Starter** (§6) and gives free help; an administrator **reviews their work and approves them as a Baker** before they can charge, bid or sell.
- Bakers **can't use other Bakers' premium items** in their own work (portfolio pieces or items they submit).
- **Where a site will live is chosen at Publish**, not at the start, so everyone designs in the same Studio. The RezSite prices show once rezsite.com is picked.

**How previews work**
- Free items, and premium items already paid for, preview **live** (the real page, with *View code*).
- A page that uses a **premium item that isn't paid for yet** previews as **screenshots**, so its code can't be copied before it's bought.
- Baker portfolio pieces on bakedbya.pro are published as **screenshots only**, with every menu and link clickable.

**Free hosting setup (2026-11-09):** the DNS for bakedby.me, rezsite.com and bakedbya.pro moves to **Cloudflare** (the domains stay registered at Porkbun). One catch-all record per domain (`*.bakedby.me`, `*.rezsite.com`, `*.bakedbya.pro`) sends every member address to one **BAKE Host Worker**, which serves that member's files from **R2** storage. Adding a member means uploading their files: no new DNS records or repositories. The three home pages (`bakedby.me`, `rezsite.com`, `bakedbya.pro`, and their `www`) are BAKE's own pages and stay on their GitHub repositories for now; member sites are never published there. Earlier setup (2026-11-07): one GitHub repository per free domain with one folder per pagename.

## 3. Accounts
- **Try first:** anyone can use the Studio without an account. The account is made at **Publish** or **code download**.
- **Sign-up:** email and password, or Google. It asks for a **pagename**, a **title** and a **description**.
- **Pagenames:** 3 to 12 characters; lowercase letters, numbers and hyphens; they start with a letter and don't end with a hyphen (the pagename becomes a subdomain, so no dots). A pagename is unique **per domain**, so three different people can own `sunrise` on bakedby.me, rezsite.com and bakedbya.pro. Reserved words (www, mail, admin, api, app, studio, help, status, brand names) and pagenames that impersonate others are blocked.
- **Logins and accounts:** one **login** (the person) holds up to **5 free accounts** and switches between them. One account = one pagename = one **site**.
- **Renaming:** a pagename can be renamed or deleted, but never handed to someone else. When renamed, the old address can be kept and forwarded, but that uses one of the 5 accounts.
- **Handing work to a Baker:** development can be handed to a Baker. The owner's editing is locked while they watch the work.
- Each pagename gets an **email address** (`pagename@` a BAKE domain) and space in BAKE's Cloudflare storage for its site. **Sites are never published to GitHub repositories** (decided 2026-11-10): publishing always goes to BAKE's Cloudflare storage, and a Maker who wants their files uses **code download** (§5).
- **Cards:** a card is asked for only **at checkout**, with one exception: making **AI images** needs a card on file first (§5).
- **User levels (added 2026-11-09):** **Maker** (every basic user, designing their own site), **Starter** (a Baker in training who gives free help), **Baker** (approved, paid help and selling). Plus **administrator**; the **escrow specialist** and the **RezSite reviewer** are administrator roles.
- Wording: "page" means one page; "site" means a whole website. **Maker** is the name users see for a basic user; where this file says "client", it means a Maker who is getting help or buying.

### RezSite eligibility
- RezSite is for First Nations, Métis and Inuit people, businesses, Nations and organizations. Non-Indigenous organizations serving Indigenous communities are welcome too.
- **The address:** everyone who self-declares gets a `pagename.rezsite.com` address. The owner states their Nation or community (**self-declared**) when choosing rezsite.com, and the page goes live **right away**. It is checked only if someone reports a concern; the owner of BAKE does the review.
- **The discount (decided 2026-11-10):** RezSite prices (§5) apply only once the Maker's **Nation verifies their membership**. Until then, the site is live on rezsite.com at regular prices.
- **Still to decide:** how a Nation verifies (for example, a verified Nation account that approves its members' requests in BAKE), what happens for Métis and Inuit organizations and for people without a Nation contact, and whether Indigenous-led organizations are verified the same way.
- Every RezSite page has a *Report a concern* link, and decisions can be appealed.
- BAKE asks for no status cards or personal documents. Membership is confirmed by the Nation, not by BAKE.
- An Indigenous advisory circle should shape the review rules, the directory and how cultural content is handled.

## 4. The cart
- Every **premium** template, section and extension used in a design goes into the cart. Free items cost nothing.
- **The cart is what's in use.** Remove an item from the design and it leaves the cart; swap the template and the price updates.
- The **cart total is always shown at the top right** of the Studio.
- The cart is paid at **Publish** or **code download** (Stripe Checkout). A site with an empty cart on bakedby.me or rezsite.com publishes **free**.
- A paid item covers **one site**. Using it on another site means buying it again.
- **Republishing** is free. Items added later go into the cart again.
- If a Baker builds a client's site and uses premium items, they go into the **client's** cart, so the client sees and approves the total.

## 5. Prices

| What | Price |
|---|---|
| Publishing to `pagename.bakedby.me` or `pagename.rezsite.com` | Free (you pay only the cart) |
| Premium templates, sections and extensions | Set by the Baker within the range of the item's **price class** (below) |
| Removing the *Baked with BAKE* badge | $5 one time (a cart item) |
| **Code download** | **$25 one time per site**; after that the site's code can be downloaded **any number of times**, so the Studio can be used as an editor |
| AI images | **10 free per login** once a card is on file; after that each new image is a cart item |
| Publishing to a **new domain** | +$50 plus the domain's price, registered through Porkbun in the client's name |
| Publishing to the client's **existing domain** | +$100: guided steps for their registrar, checked live; an administrator helps by screen-share if needed |
| Hiring a Baker | The Baker's quote, paid into escrow (§6) |

- **Price classes:** when a Baker submits an item for approval, an administrator gives it a **price class**. The class sets the range the Baker chooses the price from, and buyers can **filter items by price class**.
- **Who earns what:** **70%** of an item sale goes to the Baker and **30%** to BAKE. On Baker services, BAKE takes **10%**.
- **RezSite prices:** for Makers whose **Nation has verified their membership** (§3), on rezsite.com sites BAKE takes **no cut** on anything premium (items and Baker services). The **buyer pays less**: the price drops by BAKE's share, and the Baker earns the same as on any sale.
- **Costs that recur** (recommended, for the owner to confirm): a domain must be renewed every year, so renewals are charged **at cost** each year with reminders.

## 6. Get help: Starters and the Baker marketplace

### Request help (added 2026-11-09)
- At any point in the Studio, a Maker can **right-click and choose "Request help"**. On phones and tablets the same menu opens with a **long-press** or an always-visible **Help** button.
- They choose **free help from a Starter** or **paid help from a Baker**.
- The request carries where they were (the step, page, section or template), so the helper sees exactly what they need help with.
- Paid help follows the marketplace steps below.

### Starters: how a Baker gets started (added 2026-11-09)
1. A Maker signs up to become a **Starter** (a Baker in training).
2. The Starter gives **free help** to Makers who ask for it, and builds a track record.
3. After successfully helping **about 25 people**, the Starter submits their work for **review**. A help counts as **successful only when the Maker approves it**: their question was answered or their feature was completed (decided 2026-11-10).
4. An administrator reviews the help they gave. If it passes, they're approved as a **Baker** and can charge for help, bid on tasks and sell in the markets.
- The Starter dashboard shows progress (for example "12 of 25 people helped"), a *Submit for review* step, and a Baker badge once approved.
- **Still to decide:** who does the review and what it checks, and how help happens (chat, screen view, or the helper working on the Maker's project).

### The Baker marketplace (paid help)
1. **Anyone with an account** can describe what they want, from *Request help* or directly. That becomes a **task**.
2. Approved Bakers **bid** with a price, a delivery time and a message. (New helpers earn feedback as Starters, so a $0 quote is no longer needed; free help comes from Starters.)
3. The client and the Baker agree on an **approval window**: how long the client has to check the finished work.
4. The client accepts a quote and **pays** (this is when the card comes in). The money is held in **escrow**.
5. The Baker delivers. The client approves the work, asks for a revision, or opens a dispute.
6. Approval releases the money to the Baker, minus the **10% platform fee** (none on RezSite sites).
7. **Disputes:** an escrow specialist reviews the messages, the versions and the brief. Then they release, split or refund the money.
8. **Public feedback is required** from the client for every task, so others can choose Bakers with good information.
9. With the client's permission, finished work can appear in the Baker's portfolio on bakedbya.pro.

## 7. Community (the GeoCities spirit)
- **Neighbourhoods and Discover:** browse sites by topic and region, with a Site of the week.
- **Webrings, guestbooks and visitor counters:** optional, moderated, fun.
- **Remix a design:** start from a site's design with the owner's permission and credit.
- **Baked with BAKE** and **Baked by** credits link every site back to BAKE and to its Baker, so each site brings in new visitors.

## 8. Operations
- The goal is automation everywhere. A specialist is always on call, so any manual step happens almost instantly.
- Free hosting needs **trust and safety** from day one: a content policy, automatic checks before publishing, a report link on every site, and fast takedowns.
- **What to build first (2026-11-08): accounts** (pagename sign-up), then the two Studios and the cart.


## 9. Design notes and risks (recommended on 2026-11-07, for the owner to decide)
These keep the vision intact while staying within the rules of the services it depends on. Prices were checked on 2026-11-07 and can change.

### Hosting
- **GitHub Pages rules:** GitHub says Pages is not meant to be a free web host for running an online business or e-commerce site. It allows one organization site (and so one custom domain) per GitHub organization, 1 GB per site, and a soft limit of 100 GB of traffic a month. A few hundred community and small-business sites are likely fine. A hosting platform for thousands of sites, including paid sites, is exactly what that rule is about, and one bad site could get a whole organization suspended.
- **Decided (BAKE Host, 2026-11-09):** member sites move to **Cloudflare now**, as subdomains served by one Worker from R2 storage, with Baker portfolios on bakedbya.pro too (2026-11-10); bakeaweb.com stays on GitHub Pages. bakedby.me switches first, then rezsite.com, then bakedbya.pro. Workers Paid ($5 a month) from day one (owner, 2026-11-10). The domains stay registered at Porkbun; only their DNS moves, and email forwarding records move with it. **Cloudflare for SaaS** can later connect PRO clients' own domains: 100 are free, then about $0.10 a month each.
- **Hosting costs (estimated 2026-11-09, US dollars):** Workers Paid $5 a month (10 million requests included, then $0.30 per million), R2 storage $0.015 per GB a month with no charge for data sent to visitors. About $5 a month for 100 to 1,000 members and about $40–70 a month for 10,000 (budget $100). Cost follows visitors, not the number of subdomains. Set a Cloudflare spending alert. Full plan: `plans/bake-host-where-every-site-lives.md`.
- **Cloudflare risks:** all member sites share one Cloudflare account, so trust and safety (checks before publishing, a report link, fast takedowns) matter from day one. Large videos are embedded (YouTube, Vimeo or Cloudflare Stream), not uploaded as site files.

### Names
- **IndigiHub renamed to RezSite (2026-11-08):** an Indigenous-led platform called IndigiHub already operates in Canada (indigihub.com, founded in Manitoba by Zachary Flett), so the free Indigenous version is now **RezSite** on **rezsite.com**. indigihub.cloud is no longer used. We plan to contact IndigiHub about working together. Research: `plans/names-and-trademarks-check.md` and `plans/indigihub-rename.md`.
- Check **BAKE**, **Bake a Web**, **Baked by me** and **Baked by a pro** in the Canadian trademark database too. "Baked" is also slang for cannabis in North America; worth knowing when choosing slogans.

### Money
- **One-time pricing and recurring costs:** domain renewals, AI images and (later) hosting cost money every month or year. One-time cart prices work if renewals are charged at cost and AI images beyond the free 10 are paid (see §5).
- **Small cart items:** Stripe's 30¢ per payment makes a $5 item alone expensive to process; paying the whole cart in one checkout keeps that low.
- **Card fees:** Stripe charges about 2.9% + 30¢ per Canadian card payment, plus 0.8% for cards from outside Canada. On a $25 payment that's about $1.03.
- **Escrow:** Stripe Connect can hold funds before paying them out, but only for a limited time (90 days). Holding other people's money can also carry legal duties. Check with an accountant or lawyer in Canada before launch.
- **AI images:** OpenAI now bills images by size and quality, from under a cent to about 20¢ each. Track the real cost, and set a monthly spending alert.

### Accounts, email and code
- **Email:** don't share one Gmail login between the administrator and the client. Google doesn't allow software to create Gmail accounts, and a shared password means no clear owner. Instead, give each client `pagename@` one of our domains (forwarding to their real email, with an admin copy, or a mailbox on Google Workspace or Zoho). Administrators get their own admin access.
- **GitHub:** GitHub's terms require a human to create each account. They also allow only one free account per person and don't allow a login to be shared. Member sites are stored in Cloudflare (§2) and are **never published to GitHub repositories** (decided 2026-11-10), so no account or repository per pagename is needed. Makers who want their files use code download.

### Domains
- **Porkbun:** its API can check prices, register domains and set DNS records. It pays from prepaid account credit, and a single API registration is capped at $100. Register each domain in the client's name, so the client owns it.
- **Existing domains:** rather than an administrator logging into the client's registrar with the client's password, show guided steps for the client's registrar and check the DNS live. Keep the administrator as the fallback, using screen-share, so passwords are never handed over.

### Laws in Canada (for a lawyer to confirm)
- Privacy (**PIPEDA**), anti-spam rules for email (**CASL**), and the **Copyright Act's notice-and-notice** system for complaints about hosted content. The *Terms and policies* task drafts pages for a lawyer to review.
