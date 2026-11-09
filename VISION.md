# BAKE: vision

BAKE is a home on the web for everyone, in the spirit of GeoCities but built for today. Anyone can design a site in **BAKE Studio** and try every template, section and extension free, premium ones included. Anything premium they use goes into a **cart**, and they pay only when they publish or download the code. A site that uses only free items publishes free. Indigenous people and communities get their own free address with lower prices. Experts, called **Bakers**, have their own Studio where they build, sell their work and get hired. This file is the business plan the code is built toward. `ARCHITECTURE.md` describes what exists today (the two Studios are in place since 2026-11-08; the cart and accounts are next), and `ROADMAP.md` lists every task.

Updated 2026-11-08 (vision talk 2: two Studios and a cart; log in `plans/vision-talk.md`).

## 1. The four domains

All four are registered at **Porkbun**.

| Domain | What lives there | Example address |
|---|---|---|
| **bakeaweb.com** | The home of BAKE: **BAKE Studio PRO** (for clients) and **BAKE Studio BAKER** (for Bakers), the home page, accounts, the markets, the admin control room | `bakeaweb.com` |
| **bakedby.me** | The **free address for anyone** | `bakedby.me/pagename` |
| **rezsite.com** | The **free address for First Nations, Métis and Inuit** people, businesses and communities (**RezSite**), with lower prices | `rezsite.com/pagename` |
| **bakedbya.pro** | **Baker portfolios**: examples of each Baker's work, built in the BAKER Studio | `bakedbya.pro/bakername` |

A site can also live on the client's **own domain** (a new one bought through Porkbun, or one they already own).

Addresses use a path (`/pagename`), not a subdomain (`pagename.bakedby.me`). A path works with GitHub Pages today at no cost; subdomains would need an extra service in front.

## 2. Two Studios

EXPRESS and RezSite are no longer Studio versions (changed 2026-11-08). They became **free addresses** (bakedby.me, rezsite.com) that anyone designing in the Studio can choose when publishing.

| Studio | Who it's for | What's included |
|---|---|---|
| **BAKE Studio PRO** | Clients: anyone making a site | The full Studio, every free and premium template, section and extension to try, the cart, AI images, hiring Bakers, publishing to bakedby.me, rezsite.com or their own domain, code download |
| **BAKE Studio BAKER** | Bakers (the experts) | **Everything in PRO**, plus the four markets (services, templates, sections, extensions): make and submit templates, sections and extensions, bid on tasks, build portfolio pieces for bakedbya.pro, a public profile and reviews |

- **Anyone can use the BAKER Studio** to practise. An administrator **approves a Baker before they can bid or sell**.
- Bakers **can't use other Bakers' premium items** in their own work (portfolio pieces or items they submit).
- **Where a site will live is chosen at Publish**, not at the start, so everyone designs in the same Studio. The RezSite prices show once rezsite.com is picked.

**How previews work**
- Free items, and premium items already paid for, preview **live** (the real page, with *View code*).
- A page that uses a **premium item that isn't paid for yet** previews as **screenshots**, so its code can't be copied before it's bought.
- Baker portfolio pieces on bakedbya.pro are published as **screenshots only**, with every menu and link clickable.

**Free hosting setup (2026-11-07):** one GitHub repository per free domain (`deltaowleyes/bakedby.me`, `deltaowleyes/bakedbya.pro`, `deltaowleyes/rezsite.com`), each with its custom domain, and one folder per pagename (`bakedby.me/pagename/`). This needs no extra accounts and is the fastest start; the *BAKE Host* task decides when to move to Cloudflare or GitHub organizations.

## 3. Accounts
- **Try first:** anyone can use the Studio without an account. The account is made at **Publish** or **code download**.
- **Sign-up:** email and password, or Google. It asks for a **pagename**, a **title** and a **description**.
- **Pagenames:** 3 to 12 characters; lowercase letters, numbers and hyphens; they start with a letter. A pagename is unique **per domain**, so three different people can own `sunrise` on bakedby.me, rezsite.com and bakedbya.pro. Reserved words (admin, www, api, brand names) and pagenames that impersonate others are blocked.
- **Logins and accounts:** one **login** (the person) holds up to **5 free accounts** and switches between them. One account = one pagename = one **site**.
- **Renaming:** a pagename can be renamed or deleted, but never handed to someone else. When renamed, the old address can be kept and forwarded, but that uses one of the 5 accounts.
- **Handing work to a Baker:** development can be handed to a Baker. The owner's editing is locked while they watch the work.
- Each pagename gets an **email address** (`pagename@` a BAKE domain) and a **GitHub repository** (private if possible).
- **Cards:** a card is asked for only **at checkout**, with one exception: making **AI images** needs a card on file first (§5).
- Roles: **client**, **Baker**, **administrator**. The **escrow specialist** and the **RezSite reviewer** are administrator roles.
- Wording: "page" means one page; "site" means a whole website.

### RezSite eligibility
- RezSite is for First Nations, Métis and Inuit people, businesses, Nations and organizations. Non-Indigenous organizations serving Indigenous communities are welcome too.
- The owner states their Nation or community (**self-declared**) when choosing rezsite.com, and the page goes live **right away**. It is checked only if someone reports a concern; the owner of BAKE does the review.
- Every RezSite page has a *Report a concern* link, and decisions can be appealed.
- No status cards or personal documents are asked for.
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
| Publishing to `bakedby.me/pagename` or `rezsite.com/pagename` | Free (you pay only the cart) |
| Premium templates, sections and extensions | Set by the Baker within the range of the item's **price class** (below) |
| Removing the *Baked with BAKE* badge | $5 one time (a cart item) |
| **Code download** | **$25 one time per site**; after that the site's code can be downloaded **any number of times**, so the Studio can be used as an editor |
| AI images | **10 free per login** once a card is on file; after that each new image is a cart item |
| Publishing to a **new domain** | +$50 plus the domain's price, registered through Porkbun in the client's name |
| Publishing to the client's **existing domain** | +$100: guided steps for their registrar, checked live; an administrator helps by screen-share if needed |
| Hiring a Baker | The Baker's quote, paid into escrow (§6) |

- **Price classes:** when a Baker submits an item for approval, an administrator gives it a **price class**. The class sets the range the Baker chooses the price from, and buyers can **filter items by price class**.
- **Who earns what:** **70%** of an item sale goes to the Baker and **30%** to BAKE. On Baker services, BAKE takes **10%**.
- **RezSite prices:** on rezsite.com sites BAKE takes **no cut** on anything premium (items and Baker services). The **buyer pays less**: the price drops by BAKE's share, and the Baker earns the same as on any sale.
- **Costs that recur** (recommended, for the owner to confirm): a domain must be renewed every year, so renewals are charged **at cost** each year with reminders.

## 6. Get help: the Baker marketplace
1. **Anyone with an account** can describe what they want. That becomes a **task**.
2. Approved Bakers **bid** with a price, a delivery time and a message. A **$0 quote** is allowed, so new Bakers can earn feedback.
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
- **Recommendation (BAKE Host):** start on GitHub Pages with one organization per domain (bakedbyme, rezsite, bakedbyapro, plus one for own-domain sites), and plan the move to **Cloudflare** before a public launch. Cloudflare can serve every site from storage with no traffic charges for static files, and **Cloudflare for SaaS** connects PRO clients' own domains: 100 are free, then about $0.10 a month each. The domains stay registered at Porkbun; only their DNS would move. Decide this in the *BAKE Host* roadmap task.

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
- **GitHub:** GitHub's terms require a human to create each account. They also allow only one free account per person and don't allow a login to be shared. Instead, create **one repository per pagename inside a BAKE GitHub organization**, using a GitHub App. A client who wants their code can have the repository transferred to them.

### Domains
- **Porkbun:** its API can check prices, register domains and set DNS records. It pays from prepaid account credit, and a single API registration is capped at $100. Register each domain in the client's name, so the client owns it.
- **Existing domains:** rather than an administrator logging into the client's registrar with the client's password, show guided steps for the client's registrar and check the DNS live. Keep the administrator as the fallback, using screen-share, so passwords are never handed over.

### Laws in Canada (for a lawyer to confirm)
- Privacy (**PIPEDA**), anti-spam rules for email (**CASL**), and the **Copyright Act's notice-and-notice** system for complaints about hosted content. The *Terms and policies* task drafts pages for a lawyer to review.
