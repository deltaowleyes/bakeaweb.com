# BAKE PRO roadmap

Every idea for BAKE Studio, in one list. These are possible avenues, not a to-do list. The list itself lives in `ROADMAP.json` (edit that file and the BAKE PRO buttons update too); this page is made from it by `node studio/scripts/roadmap.mjs`. Business plan: `VISION.md`. Updated 2026-11-08. 68 tasks.

**Already done:** Drag-and-drop sections (Step 3); Inspector sidebar (Step 3); Google Fonts; Image editor with crop and border/frame controls; Versions: EXPRESS, RezSite and BAKER preview the live page with View code; PRO previews screenshots; Page files and clickable screenshot pages (lib/site.js); Studio moved to bakeaweb.com; IndigiHub version renamed to RezSite (rezsite.com); Only the finished studio is published (GitHub Pages serves docs/); Automatic testing robot (Playwright tests, npm test, GitHub Actions); Undo, redo and history (Ctrl+Z, save points); Two Studios: BAKE Studio PRO and BAKE Studio BAKER (destination chosen at Publish).

**Top picks** are marked ★. **Plan first** means Claude shows a plan and costs and waits for an OK before building.
**Ready:** ▶ now = can start now; ✎ plan = the planning part can start now; ⏳ after = waits for other tasks; ✋ you = waits for you.

## BAKE PRO 2.0: run together now

Tasks in the same wave change different files, so they can all run at the same time. Each works on its own branch (`bake/<id>`) and never builds or publishes; one **Merge and publish** step does that at the end (CLAUDE.md, *Parallel BAKE*).

**Wave 1** (35 tasks): Talk about the vision (always open) · Site health check · Turn designs into real websites · The cart and its total at the top right · Pagename accounts · BAKE Host: where every site lives · Free publish to bakedby.me and rezsite.com · Cart checkout · RezSite free pages · Trust and safety for free hosting · Escrow payments · bakeaweb.com home page · Edit text right on the preview · Drag and drop for pages, cards and menu links · Command palette · Colours from your logo · Mix and match templates · Compare templates side by side · Studio works great on phones · Pagename email addresses · A repository for every pagename · Terms and policies · New domain through Porkbun · Connect an existing domain · Domain renewals for PRO · Import any website · Real AI images · AI image limits: card first, 10 free · AI writing help on every field · Shareable preview link · Pin comments on the preview · Requests reach your inbox · Automate the manual steps · Protect the templates · Ready for a million sites

**Wave 2** (3 tasks): Describe your business, get a site · Dark mode and seasonal looks · Presentation mode

**Wave 3** (2 tasks): More section types · Faster previews

**Wave 4** (2 tasks): Three new template families · Guided tour and demo projects

**Wave 5** (1 task): English and French

**Wave 6** (2 tasks): Indigenous languages and syllabics · Requests that write the brief

## Anytime: Studio improvements that need no accounts or services; do them whenever you like

| | Task | Area | Size | Ready | You'll need |
|---|---|---|---|---|---|
| ★ | **Talk about the vision (always open)**<br>A standing place to talk through how BAKE should work: the two Studios, the cart, accounts, markets, prices. Never marked done. | Operations | Quick | ▶ now | Just you and your ideas |
|  | **Also make the repositories private**<br>Hide the code and plans on GitHub too. Needs GitHub Pro (about $4 US a month); the website stays public and keeps working. | Operations | Quick | ✋ you | GitHub Pro (about $4/month, check your billing settings) |
| ★ | **Free hosting live on bakedby.me, bakedbya.pro and rezsite.com**<br>Each free domain gets its home page and a working example site, so the hosting is real before accounts arrive. | Publishing | Quick | ✋ you | DNS at Porkbun for all 4 domains, and the 3 GitHub repositories (step-by-step guide) |
|  | **bakeaweb.com home page**<br>The front door: what BAKE is, the two Studios, the free addresses, prices, examples and a big Start baking button. | Sharing | Medium | ▶ now | — |
|  | **Edit text right on the preview**<br>Double-click a headline in the preview and type. Feels like magic. | Editing | Medium | ▶ now | — |
|  | **Drag and drop for pages, cards and menu links**<br>Sections can already be dragged; this brings it to everything else. | Editing | Quick | ▶ now | — |
|  | **Command palette**<br>Ctrl+K to jump anywhere or do anything. A power-user favourite. | Editing | Quick | ▶ now | — |
| ★ | **Site health check**<br>Scores the old site, then shows how much better the new design is. A built-in sales pitch. | AI | Medium | ▶ now | — |
|  | **Describe your business, get a site**<br>One or two sentences in, a complete draft site out. | AI | Medium | ▶ now | Works locally first; an AI server function later |
|  | **Colours from your logo**<br>Pick a logo and get palettes that match it, with contrast checked. | AI | Quick | ▶ now | — |
|  | **Mix and match templates**<br>Go beyond 24 templates: any section can borrow a style from any family. | Design | Medium | ▶ now | — |
|  | **Compare templates side by side**<br>Put 2 or 3 favourites next to each other and decide faster. | Design | Quick | ▶ now | — |
|  | **Dark mode and seasonal looks**<br>Every template gets a dark version, plus optional holiday accents. | Design | Medium | ▶ now | — |
|  | **More section types**<br>Events, team, FAQ, pricing, hours, map, logos strip, newsletter. | Design | Medium | ▶ now | — |
|  | **Three new template families**<br>Fresh looks that make the gallery feel endless. | Design | Big | ▶ now | — |
|  | **Presentation mode**<br>A full-window walkthrough for pitching a design in a meeting. | Sharing | Quick | ▶ now | — |
|  | **Studio works great on phones**<br>Design a site from the couch, not just the desk. | Quality | Medium | ▶ now | — |
|  | **Faster previews**<br>Thumbnails and screenshots that appear almost instantly. | Quality | Medium | ▶ now | — |
|  | **Guided tour and demo projects**<br>New visitors see the studio's power in one click. | Quality | Quick | ▶ now | — |
|  | **English and French**<br>A bilingual studio and bilingual sites for Canadian clients. | Quality | Medium | ▶ now | — |
|  | **Indigenous languages and syllabics**<br>Sites in Cree, Ojibwe, Inuktitut and more, with syllabics fonts that just work. | Quality | Medium | ▶ now | Indigenous language speakers to check the results |

## Phase 1: Accounts, free hosting, the cart and the first publish

| | Task | Area | Size | Ready | You'll need |
|---|---|---|---|---|---|
| ★ | **Pagename accounts** (plan first)<br>Sign up at Publish or code download with a pagename, title and description. One login holds up to 5 accounts (one site each); pagenames are unique per domain. | Accounts | Big | ✎ plan | A free Supabase account |
|  | **Pagename email addresses** (plan first)<br>pagename@bakedby.me (or another BAKE domain) for every client, without sharing a Gmail password. | Accounts | Medium | ✎ plan | Email forwarding set up on one of our Porkbun domains |
|  | **A repository for every pagename** (plan first)<br>Each page gets its own GitHub repository in a BAKE organization, created automatically. | Accounts | Medium | ✎ plan | A GitHub organization per hosting domain and a GitHub App |
| ★ | **Turn designs into real websites**<br>The engine behind every publish. Real page files already work (lib/site.js); next come image files, a favicon, a sitemap and testing on every template. | Publishing | Big | ▶ now | — |
| ★ | **BAKE Host: where every site lives** (plan first)<br>Decide now how thousands of free sites are hosted safely, before GitHub's rules or limits become a problem. | Publishing | Medium | ✎ plan | Possibly a free Cloudflare account |
| ★ | **Free publish to bakedby.me and rezsite.com** (plan first)<br>A site with an empty cart goes online free at bakedby.me/pagename or rezsite.com/pagename in one click, with a small Baked with BAKE badge that brings in new visitors. | Publishing | Big | ✎ plan | Accounts first (so a server function can publish safely) |
| ★ | **Cart checkout** (plan first)<br>The way BAKE earns: pay the cart in one Stripe checkout at Publish or code download. Bakers get 70% of item sales, BAKE 30% (no BAKE share on RezSite sites). | Publishing | Medium | ✎ plan | A Stripe account |
| ★ | **RezSite free pages** (plan first)<br>Free sites for First Nations, Métis and Inuit people, businesses and communities on rezsite.com, with lower prices and a respectful review only when a concern is reported. | Accounts | Medium | ✎ plan | Indigenous advisors to shape the rules |
| ★ | **Names and trademarks check** (plan first)<br>An IndigiHub already exists in Canada (so ours is now RezSite); check every BAKE name before it's on thousands of sites. | Operations | Quick | ✋ you | Read the plan (plans/names-and-trademarks-check.md), then a trademark lawyer for the final answer |
| ★ | **Trust and safety for free hosting** (plan first)<br>Free hosting attracts scammers. Keep them out, or GitHub or Cloudflare could take every BAKE site down with them. | Trust | Medium | ✎ plan | — |
| ★ | **The cart and its total at the top right**<br>Anyone can try premium templates, sections and extensions free; whatever is in use goes in a cart, and the total always shows at the top right. | Studio | Medium | ▶ now | — |
|  | **Terms and policies** (plan first)<br>Terms of service, Baker agreement, escrow and refund policy, privacy policy, content and takedown policy, RezSite rules. | Operations | Medium | ✎ plan | A lawyer to review the drafts |
|  | **Code download**<br>$25 once per site, then the site's code can be downloaded any number of times, so the Studio works as an editor for sites hosted anywhere. | Publishing | Quick | ⏳ after pro-upgrade-and-publish-fee, turn-designs-into-real-websites | Cart checkout first |

## Phase 2: PRO domains, server functions and sharing

| | Task | Area | Size | Ready | You'll need |
|---|---|---|---|---|---|
|  | **New domain through Porkbun** (plan first)<br>PRO: for $50 more, search, buy and connect a brand-new domain in one flow. | Publishing | Medium | ✎ plan | A Porkbun account with API access and prepaid credit |
|  | **Connect an existing domain** (plan first)<br>PRO: for $100 more, a guided, checked setup, with an admin by screen-share as backup. | Publishing | Medium | ✎ plan | — |
|  | **BAKER portfolio sites on bakedbya.pro**<br>Every Baker gets bakedbya.pro/bakername: screenshots of their best work, with every menu and link clickable. | Accounts | Medium | ⏳ after pagename-accounts, bake-host-where-every-site-lives | Accounts and BAKE Host |
|  | **Domain renewals for PRO** (plan first)<br>Domains cost money every year. A one-time PRO fee can't cover that forever, so no client ever loses their domain by surprise. | Payments | Quick | ✎ plan | Porkbun prepaid credit; Stripe |
|  | **Updates and rollback after launch**<br>Clients keep editing and republish anytime, and can undo a bad publish. | Publishing | Quick | ⏳ after free-express-publish-to-bakedby-me-pagename | — |
|  | **Import any website** (plan first)<br>Fixes most sites blocking imports, and blocked images in screenshots. | Studio | Medium | ✎ plan | Supabase |
|  | **Real AI images** (plan first)<br>Turns the sample artwork tab into real generated logos, heroes and illustrations, for everyone with a card on file. | AI | Medium | ✎ plan | An OpenAI account with billing, plus Supabase |
|  | **AI image limits: card first, 10 free** (plan first)<br>AI images cost BAKE money every time one is made: a card on file first, 10 free per login, then each image goes in the cart. | AI | Quick | ✎ plan | An OpenAI account with billing |
|  | **AI writing help on every field** (plan first)<br>Improve, shorten, make friendlier, fix spelling or translate any text. | AI | Medium | ✎ plan | An AI server function (Supabase plus an API key) |
|  | **Shareable preview link** (plan first)<br>Send anyone a link to see the new site on every screen size. | Sharing | Medium | ✎ plan | Supabase |
|  | **Pin comments on the preview** (plan first)<br>Click any spot and leave a note, like Figma comments. Great for client and Baker feedback. | Sharing | Medium | ✎ plan | Supabase |
|  | **Requests reach your inbox** (plan first)<br>Development requests arrive by email instead of staying in one browser. | Sharing | Medium | ✎ plan | Supabase, plus a free email-sending account (like Resend) |
|  | **Requests that write the brief**<br>Every request or task arrives as a complete brief, so work starts with no back-and-forth. | Sharing | Medium | ▶ now | — |
|  | **Visitor stats for every site**<br>Owners see how many people visit, without creepy tracking or cookie banners. | Sharing | Medium | ⏳ after free-express-publish-to-bakedby-me-pagename | Possibly a free Cloudflare account |

## Phase 3: The Baker marketplace, escrow and reviews

| | Task | Area | Size | Ready | You'll need |
|---|---|---|---|---|---|
|  | **Baker profiles**<br>Anyone can practise in the BAKER Studio; an admin approves a Baker before they bid or sell. Profiles show skills, rates, reviews and portfolio pieces on bakedbya.pro. | Accounts | Medium | ⏳ after pagename-accounts | — |
| ★ | **Ask for help from anywhere**<br>Click any part of the preview, describe what you want, and it becomes a task Bakers can bid on. | Marketplace | Medium | ⏳ after pagename-accounts | Accounts first |
|  | **AI task writer**<br>Turns a vague request into a clear brief and suggests a fair price range. | Marketplace | Quick | ⏳ after ai-writing-help-on-every-field | An AI server function |
|  | **Baker bidding**<br>Bakers quote a price (even $0), a delivery time and an approval window. | Marketplace | Medium | ⏳ after baker-profiles | — |
|  | **Task workspace**<br>Chat, files and a safe copy of the client's project for the Baker to work on. | Marketplace | Big | ⏳ after baker-bidding | — |
| ★ | **Escrow payments** (plan first)<br>The client pays when accepting a quote, and the money is held until they approve. | Payments | Big | ✎ plan | A Stripe account, plus a quick check with an accountant or lawyer |
|  | **Fees, payouts and receipts**<br>BAKE's 10% on services and 30% on item sales (none on RezSite sites), Baker payouts and clear receipts for everyone. | Payments | Medium | ⏳ after escrow-payments | Escrow first |
|  | **Dispute centre**<br>An escrow specialist sees everything in one place and decides fairly. | Payments | Medium | ⏳ after escrow-payments | — |
| ★ | **Required public reviews**<br>Every finished task gets a public review, so the marketplace earns trust. | Trust | Quick | ⏳ after baker-bidding | — |
|  | **Baker reputation and badges**<br>Completion rate, on-time rate and badges like Rising Baker for $0 starters. | Trust | Quick | ⏳ after required-public-reviews | — |
|  | **Safety and fraud protection**<br>Keeps payments on the platform and bad actors out. | Trust | Medium | ⏳ after escrow-payments | — |
| ★ | **Markets for templates, sections and extensions**<br>Approved Bakers submit templates, sections and extensions; an admin gives each a price class, the Baker picks a price in its range, and buyers filter by price class. | Marketplace | Big | ⏳ after baker-profiles | Accounts and Baker profiles first |

## Phase 4: Operations, community and scale

| | Task | Area | Size | Ready | You'll need |
|---|---|---|---|---|---|
|  | **Admin control room**<br>Your dashboard for users, RezSite reviews, reports, tasks, escrow, disputes, domains and manual jobs. | Operations | Big | ⏳ after pagename-accounts | Accounts first |
|  | **On-call specialist queue**<br>Manual steps get done almost instantly, with alerts to the specialist on call. | Operations | Medium | ⏳ after admin-control-room | — |
|  | **Automate the manual steps** (plan first)<br>Each manual job becomes automatic over time, with the specialist as backup. | Operations | Big | ✎ plan | — |
|  | **Protect the templates** (plan first)<br>Moves page rendering to a server so nobody can copy your template code. | Operations | Big | ✎ plan | Possibly a small paid server; plan first |
|  | **Neighbourhoods and Discover**<br>GeoCities-style neighbourhoods for today: browse BAKE sites by topic and region, plus a Site of the week. | Community | Medium | ⏳ after trust-and-safety-for-free-hosting | Trust and safety first |
|  | **Webrings, guestbooks and visitor counters**<br>The fun of the old web: join a webring, sign a guestbook, watch your counter climb. Moderated, with no spam. | Community | Medium | ⏳ after pagename-accounts | Supabase |
|  | **Remix a design**<br>Love a site? Start your own from its design, with permission and credit. | Community | Quick | ⏳ after pagename-accounts | Accounts first |
|  | **Ready for a million sites**<br>Backups, monitoring and a status page, so growth never means downtime. | Operations | Medium | ✎ plan | — |
