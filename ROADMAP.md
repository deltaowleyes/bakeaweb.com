# BAKE PRO roadmap

Every idea for BAKE Studio, in one list. These are possible avenues, not a to-do list. The list itself lives in `ROADMAP.json` (edit that file and the BAKE PRO buttons update too); this page is made from it by `node studio/scripts/roadmap.mjs`. Business plan: `VISION.md`. Updated 2026-11-19. 88 tasks.

**Already done:** Visitor stats for every site: page views counted by the BAKE Host Worker, shown in BAKER Admin with the badge tier (2026-11-16); Drag-and-drop sections (Step 3); Inspector sidebar (Step 3); Google Fonts; Image editor with crop and border/frame controls; Versions: EXPRESS, RezSite and BAKER preview the live page with View code; PRO previews screenshots; Page files and clickable screenshot pages (lib/site.js); Studio moved to bakeaweb.com; IndigiHub version renamed to RezSite (rezsite.com); Only the finished studio is published (GitHub Pages serves docs/); Automatic testing robot (Playwright tests, npm test, GitHub Actions); Undo, redo and history (Ctrl+Z, save points); Two Studios: BAKE Studio PRO and BAKE Studio BAKER (destination chosen at Publish); Pitch run: specialty drink cafés, coffee houses and drive-thrus (Whip, Pourover, Letterboard) for the Sweet Tree Cafe pitch: 171 templates; Ten new designer template families (Tide, Ember, Folio, Block party, Bento, Handmade, Glow, Swiss grid, Sunny retro, Lens): 54 templates; Photo robot (free Pixabay sample photos with credits) and three photo-led flagship templates with motion: Hearth (cafés), Volt (trades), Loom (makers): 63 templates; New sections: menu with prices and categories, booking and service area, products with prices; wordmark logos for the flagships; Three more flagships: Bloom (salons), Pulse (fitness), Commons (community organizations and band offices): 72 templates; Indigenous business series run 1: consulting firms (Council, Meridian, Bridge) and a Numbered steps card style: 81 templates; Indigenous business series run 2: movers and logistics (Convoy, Homeward, Freight): 90 templates; private Pitch Book (pitches.html) with before/after redesigns in Supabase; Indigenous business series run 3: lodges and outdoor tourism (Timber, Shoreline, Basecamp): 99 templates; Grades out of 99 with grade-based prices (70-74 free to 90+ $500); templates under 70 no longer offered; sample photo credits in page footers; Indigenous business series run 4: film and media production (Reel, Marquee, Frame): 108 templates; Indigenous business series run 5: marinas and waterfront (Harbour, Waterline, Dockside): 117 templates; Indigenous business series run 6: apparel, embroidery and printing (Press, Stitch, Merch): 126 templates; Indigenous business series run 7: sports bars, roadside motels and riverside restaurants (Taproom, Roadside, Patio): 135 templates; Indigenous business series run 8: civil, concrete and shoreline contractors (Bedrock, Breakwater, Rebar): 144 templates.

**Top picks** are marked ★. **Plan first** means Claude shows a plan and costs and waits for an OK before building.
**Ready:** ▶ now = can start now; ✎ plan = the planning part can start now; ⏳ after = waits for other tasks; ✋ you = waits for you.

## BAKE PRO 2.0: run together now

Tasks in the same wave change different files, so they can all run at the same time. Each works on its own branch (`bake/<id>`) and never builds or publishes; one **Merge and publish** step does that at the end (CLAUDE.md, *Parallel BAKE*).

**Wave 1** (42 tasks): Talk about the vision (always open) · Site health check · Card that sits on the seam between two sections · Layout linter for the finished page · Brand-matched photos · Grader reads the page code for motion and features · Turn designs into real websites · The cart and its total at the top right · Import a site as it is · HTML editor with locked code blocks · Magic AI buttons · Pagename accounts · Free publish to bakedby.me and rezsite.com · Cart checkout · RezSite free pages · Trust and safety for free hosting · Escrow payments · Check imported sites before publish · Edit text right on the preview · Drag and drop for pages, cards and menu links · Command palette · Colours from your logo · Compare templates side by side · Studio works great on phones · Automatic quality gates · Copy that fits the layout · Pagename email addresses · Terms and policies · New domain through Porkbun · Connect an existing domain · Domain renewals for PRO · Import any website · Real AI images · AI image limits: card first, 10 free · AI writing help on every field · Shareable preview link · Pin comments on the preview · Requests reach your inbox · Magic AI allowance and packs · Automate the manual steps · Protect the templates · Ready for a million sites

**Wave 2** (5 tasks): Sticky and parallax background photos · Grade screenshots, not code · Describe your business, get a site · Presentation mode · OKLCH colour system

**Wave 3** (4 tasks): Header scrolls away, menu stays · bakeaweb.com home page · Faster previews · Guided tour and demo projects

**Wave 4** (3 tasks): Design tokens and a spacing linter · Indigenous languages and syllabics · Requests that write the brief

**Wave 5** (1 task): Mix and match templates

**Wave 6** (1 task): Dark mode and seasonal looks

**Wave 7** (1 task): More section types

**Wave 8** (1 task): English and French

**Wave 9** (1 task): Video opener (hero background video)

**Wave 10** (1 task): Video cards that play on hover

**Wave 11** (1 task): Motion pack

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
|  | **Presentation mode**<br>A full-window walkthrough for pitching a design in a meeting. | Sharing | Quick | ▶ now | — |
|  | **Studio works great on phones**<br>Design a site from the couch, not just the desk. | Quality | Medium | ▶ now | — |
|  | **Faster previews**<br>Thumbnails and screenshots that appear almost instantly. | Quality | Medium | ▶ now | — |
|  | **Guided tour and demo projects**<br>New visitors see the studio's power in one click. | Quality | Quick | ▶ now | — |
|  | **English and French**<br>A bilingual studio and bilingual sites for Canadian clients. | Quality | Medium | ▶ now | — |
|  | **Indigenous languages and syllabics**<br>Sites in Cree, Ojibwe, Inuktitut and more, with syllabics fonts that just work. | Quality | Medium | ▶ now | Indigenous language speakers to check the results |
| ★ | **Import a site as it is** (plan first)<br>Bring in an existing site unchanged (its own HTML, CSS, images and scripts) and host it free. Its own code is always viewable, editable and free to download until a premium item is added. | Studio | Medium | ✎ plan | — |
| ★ | **HTML editor with locked code blocks** (plan first)<br>BAKE Studio as an HTML editor: code beside the live preview. Unpaid premium templates, sections and add-ons show as locked blocks until checkout; free items stay visible. | Studio | Big | ✎ plan | — |
| ★ | **Magic AI buttons** (plan first)<br>Buttons marked with a sparkle improve a page in one click: Make it pop, Rewrite, Fix for phones, Modernize, Speed it up, Easy for everyone, Get found on Google, Translate, Add a section. | AI | Big | ✎ plan | An AI server function (Supabase plus an API key) for the AI ones; some work without one |
|  | **Video opener (hero background video)**<br>A silent, looping background video (drone shot, job site, kitchen) behind the opening headline. Chris valued it at about 20 points. Phones and visitors who ask for less motion get a still photo instead. | Design | Medium | ▶ now | — |
|  | **Video cards that play on hover**<br>Service or product cards can hold a short, silent looping clip that starts playing when you point at the card (and when it scrolls into view on phones), showing a still photo otherwise. It makes a page feel alive without autoplaying everything. | Design | Quick | ▶ now | — |
| ★ | **Card that sits on the seam between two sections**<br>A rounded, accent-coloured card (contact form, quote, free-estimate offer or testimonial) that overlaps the line between two sections, half in each, often pushed to one side. Leah gave bonus points every time she saw it. | Design | Medium | ▶ now | — |
| ★ | **Sticky and parallax background photos**<br>A section's background photo can stay put (sticky) or move slower than the page (parallax, e.g. 50% speed), which gives depth and made Chris rate Akawe 98. Makers pick it per section with a simple Scroll / Sticky / Slow (25%, 50%, 75%) choice. | Design | Medium | ▶ now | — |
| ★ | **Header scrolls away, menu stays**<br>Chris and Leah both called this out on 9 sites. When you scroll down, the top part of the header (logo, phone, top bar) slides away and only the menu bar stays pinned, slimming down a little. It keeps navigation handy without a big block eating the screen, which is exactly what they marked down on Sage Solutions and KC Interior Design. | Design | Medium | ▶ now | — |

## Design quality: Engineering the 92/99 ceiling away: grade the real pixels, enforce the maths, catch small mistakes, and make stock photos look like one shoot. All plain HTML/CSS, Playwright and GitHub Actions; nothing changes in the studio's React.

| | Task | Area | Size | Ready | You'll need |
|---|---|---|---|---|---|
| ★ | **Grade screenshots, not code** (plan first)<br>Playwright screenshots each design at phone, tablet and desktop; a vision model grades the pictures against a fixed checklist and returns fixes. Catches what code-only grading can't see. | Quality | Medium | ✎ plan | An Anthropic API key with prepaid credits, stored as GitHub secret ANTHROPIC_API_KEY (about 1–1.5 cents per template graded) |
|  | **Side-by-side grading with reference sites**<br>Instead of 'score this out of 99', the grader picks the better of two screenshots. A saved set of 10–20 reference sites you agree are 97+ anchors the scale, so a 95 really means 95. | Quality | Medium | ⏳ after grade-screenshots-not-code | An hour of your and Leah's time to pick the reference sites |
| ★ | **Design tokens and a spacing linter**<br>Every size, space, corner and shadow comes from one list of tokens: a type scale on a fixed ratio, spacing on an 8 px grid. Stylelint fails the build if site.css uses a value that isn't a token. | Design | Quick | ▶ now | — |
|  | **Automatic quality gates**<br>Lighthouse (speed, accessibility, SEO) and axe accessibility checks run on every push, with a contrast check on every text colour. A design can't be graded above 95 unless all of them pass. | Quality | Quick | ▶ now | — |
| ★ | **Layout linter for the finished page**<br>A Playwright robot checks every template at every screen size for the small mistakes that cost points: text spilling out, overlaps, lines over 75 characters, a lone word on a headline's last line, tap targets under 44 px, layout shift, two same-coloured sections in a row. | Quality | Medium | ▶ now | — |
| ★ | **Brand-matched photos**<br>The photo robot pulls more Pixabay candidates per slot, keeps the ones whose colours match the palette, crops around the subject, can grade them toward the brand colours, and saves sharp AVIF/WebP sizes. Three random stock photos start to look like one shoot. | Design | Medium | ▶ now | — |
|  | **OKLCH colour system**<br>Palettes are built in OKLCH, a colour space that matches how people see lightness: 10-step tonal scales from one brand colour, APCA contrast checks, and dark versions from the same scales. Powers 'Colours from your logo'. | Design | Quick | ▶ now | — |
|  | **Typography polish pack**<br>Balanced headlines, no lone words in paragraphs, fallback fonts sized to match so pages don't jump while loading, a tested list of font pairings, and letter-spacing tuned per size. | Design | Quick | ⏳ after design-tokens-and-a-spacing-linter | — |
|  | **Copy that fits the layout**<br>Each section gets a character budget (hero headline 20–45 characters, card text 80–140…). Text that doesn't fit is rewritten, not squeezed in, so every option looks designed around its words. | Design | Quick | ▶ now | — |
|  | **Motion pack**<br>Restrained CSS-only motion for every template: sections reveal as you scroll, smooth page-to-page transitions, button and card hover effects; all switched off for people who ask for less motion. | Design | Quick | ▶ now | — |
|  | **Visual regression baselines**<br>Approved screenshots of every template are saved; any change that moves pixels has to be approved first. Once a template reaches 96, a later CSS tweak can't quietly drop it back to 91. | Quality | Quick | ⏳ after design-tokens-and-a-spacing-linter, typography-polish-pack | — |
| ★ | **Grader reads the page code for motion and features**<br>Screenshots can't see scroll effects, so the taste grader misses sites Chris and Leah love (Kenkenem, Monkman, GoodMinds, Asham, Nuez). A feature detector loads each page in a real browser, scrolls it, and records what it does: menu-only sticky, shrinking header, sticky/parallax backgrounds, scroll animations, hover videos, video hero, seam cards. It also flags broken bits (unrendered shortcodes like [layerslider], doubled titles like 'Home Home', site down, bot-check pages) so grades and call lists get them right. | Quality | Medium | ▶ now | — |

## Phase 1: Accounts, free hosting, the cart and the first publish

| | Task | Area | Size | Ready | You'll need |
|---|---|---|---|---|---|
| ★ | **Pagename accounts** (plan first)<br>Sign up at Publish or code download with a pagename, title and description. One login holds up to 5 accounts (one site each); pagenames are unique per domain. | Accounts | Big | ✎ plan | A free Supabase account |
|  | **Pagename email addresses** (plan first)<br>pagename@bakedby.me (or another BAKE domain) for every client, without sharing a Gmail password. | Accounts | Medium | ✎ plan | Email forwarding set up on one of our Porkbun domains |
| ★ | **Turn designs into real websites**<br>The engine behind every publish. Real page files already work (lib/site.js); next come image files, a favicon, a sitemap and testing on every template. | Publishing | Big | ▶ now | — |
| ★ | **BAKE Host: where every site lives**<br>Every member site and Baker portfolio gets its own subdomain (sunrise.rezsite.com), served by Cloudflare, so BAKE can grow past GitHub's limits. Decided 2026-11-10. | Publishing | Medium | ✋ you | Your Cloudflare checklist in plans/bake-host-where-every-site-lives.md §3: a Cloudflare account, the domains added, Workers Paid ($5 a month), R2, and an API token saved as a GitHub secret |
| ★ | **Free publish to bakedby.me and rezsite.com** (plan first)<br>A site with an empty cart goes online free at pagename.bakedby.me or pagename.rezsite.com in one click, with a small Baked with BAKE badge that brings in new visitors. | Publishing | Big | ✎ plan bake-host-where-every-site-lives | Accounts first (so a server function can publish safely) |
| ★ | **Cart checkout** (plan first)<br>The way BAKE earns: pay the cart in one Stripe checkout at Publish or code download. Bakers get 70% of item sales, BAKE 30% (no BAKE share on RezSite sites). | Publishing | Medium | ✎ plan | A Stripe account |
| ★ | **RezSite free pages** (plan first)<br>Free sites for First Nations, Métis and Inuit people, businesses and communities on rezsite.com, with lower prices and a respectful review only when a concern is reported. | Accounts | Medium | ✎ plan | Indigenous advisors to shape the rules |
| ★ | **Names and trademarks check** (plan first)<br>An IndigiHub already exists in Canada (so ours is now RezSite); check every BAKE name before it's on thousands of sites. | Operations | Quick | ✋ you | Read the plan (plans/names-and-trademarks-check.md), then a trademark lawyer for the final answer |
| ★ | **Trust and safety for free hosting** (plan first)<br>Free hosting attracts scammers. Keep them out, or GitHub or Cloudflare could take every BAKE site down with them. | Trust | Medium | ✎ plan | — |
| ★ | **The cart and its total at the top right**<br>Anyone can try premium templates, sections and extensions free; whatever is in use goes in a cart, and the total always shows at the top right. | Studio | Medium | ▶ now | — |
|  | **Terms and policies** (plan first)<br>Terms of service, Baker agreement, escrow and refund policy, privacy policy, content and takedown policy, RezSite rules. | Operations | Medium | ✎ plan | A lawyer to review the drafts |
|  | **Code download**<br>$25 once per site, then the site's code can be downloaded any number of times, so the Studio works as an editor for sites hosted anywhere. | Publishing | Quick | ⏳ after pro-upgrade-and-publish-fee, turn-designs-into-real-websites | Cart checkout first |
| ★ | **Check imported sites before publish** (plan first)<br>Imported sites can bring their own scripts. Check them before they go live on bakedby.me or rezsite.com, so one bad site can't hurt visitors or get every BAKE site taken down. | Trust | Medium | ✎ plan | — |

## Phase 2: PRO domains, server functions and sharing

| | Task | Area | Size | Ready | You'll need |
|---|---|---|---|---|---|
|  | **New domain through Porkbun** (plan first)<br>PRO: for $50 more, search, buy and connect a brand-new domain in one flow. | Publishing | Medium | ✎ plan | A Porkbun account with API access and prepaid credit |
|  | **Connect an existing domain** (plan first)<br>PRO: for $100 more, a guided, checked setup, with an admin by screen-share as backup. | Publishing | Medium | ✎ plan | — |
|  | **BAKER portfolio sites on bakedbya.pro**<br>Every Baker gets bakername.bakedbya.pro: screenshots of their best work, with every menu and link clickable. | Accounts | Medium | ⏳ after pagename-accounts, bake-host-where-every-site-lives | Accounts and BAKE Host |
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
|  | **Magic AI allowance and packs** (plan first)<br>Each magic click costs BAKE a little money: a free monthly allowance per login once a card is on file, then paid packs in the cart. | AI | Quick | ✎ plan | An AI account with billing; Stripe |

## Phase 3: The Baker marketplace, escrow and reviews

| | Task | Area | Size | Ready | You'll need |
|---|---|---|---|---|---|
|  | **Baker profiles**<br>Anyone can practise in the BAKER Studio; an admin approves a Baker before they bid or sell. Profiles show skills, rates, reviews and portfolio pieces on bakedbya.pro. | Accounts | Medium | ⏳ after pagename-accounts | — |
| ★ | **Request help from anywhere**<br>Click any part of the preview, describe what you want, and it becomes a task Bakers can bid on. | Marketplace | Medium | ⏳ after pagename-accounts | Accounts first |
|  | **AI task writer**<br>Turns a vague request into a clear brief and suggests a fair price range. | Marketplace | Quick | ⏳ after ai-writing-help-on-every-field | An AI server function |
|  | **Starters: the path to Baker** (plan first)<br>Anyone who wants to become a Baker starts as a Starter, gives free help, and earns approval as a Baker. | Marketplace | Medium | ⏳ after pagename-accounts, ask-for-help-from-anywhere | Accounts and Request help first |
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
