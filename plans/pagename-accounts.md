# Plan: Pagename accounts

Roadmap task `pagename-accounts` (Phase 1, ★, plan first). Written 2026-11-08 from VISION.md §3 (vision talk 2). **Approved 2026-11-08** with the recommendations in §9, plus two changes from the owner: **3 free sites per login** (was 5), and a site with **any purchase doesn't count** toward that limit. (Also decided: **5 free AI images** once a card is validated, was 10; that belongs to the AI image tasks.)

Prices were checked on 2026-11-08 and are in US dollars (about 1.4 × for Canadian dollars). They can change.

---

## 1. What this task gives BAKE, in one paragraph

People keep designing in the Studio with no account, exactly like today. When they press **Publish** or **Download code**, a short sign-up appears: email and password, or *Continue with Google*, then a **pagename**, a **title** and a **description**. From then on their design is saved online in that account, so it follows them to any computer and can't be lost when a browser clears its storage. One person (a **login**) can hold up to **3 free accounts**, one site each (sites with a purchase don't count toward the 3), and switch between them from a small menu in the header. A **Your account** page lets them rename, delete or switch. Everything else that needs accounts (free publishing, the cart, Baker profiles, the admin room) is built on top of this.

## 2. The words used in this plan

| Word | Means | Example |
|---|---|---|
| **Login** | The person. One email (or one Google account). | chris@example.com |
| **Account** | One pagename on one domain = one site. A login holds up to 3 free ones; accounts with a purchase are extra. | `sunrise` on bakedby.me |
| **Pagename** | The name in the address. | bakedby.me/**sunrise** |
| **Project** | The design saved in an account (what the Studio keeps in the browser today). | — |
| **Role** | What a login is allowed to do: client, Baker, administrator (escrow specialist and RezSite reviewer are administrator roles). | — |

## 3. How it will work for a visitor

1. **Design freely.** No account, no card. The work is saved in the browser, as now.
2. **Press Publish or Download code.** A sign-up window opens (or *Sign in* if they already have a login).
3. **Choose how to sign in:** email + password (they get a confirmation email), or *Continue with Google* (one click).
4. **Choose the address:** bakedby.me or rezsite.com (bakedbya.pro is for Bakers, see Q3), then type a pagename. A green tick or a red message appears **as they type**:
   - 3 to 12 characters; lowercase letters, numbers and hyphens; starts with a letter.
   - Not already taken **on that domain** (the same pagename can exist once on each domain).
   - Not a reserved word (admin, www, api, mail, support, bake, bakeaweb, studio, login…) or a name that pretends to be someone else (a starter list now; the *Trust and safety* task grows it).
5. **Title and description.** Prefilled from the business name and one-line description already typed in the Studio.
6. **RezSite only:** a short line where they state their Nation or community (self-declared, live right away, kept private; only the RezSite reviewer can see it). The full RezSite rules come from the *RezSite free pages* task.
7. **Done.** The design they were working on moves into the new account and is saved online. Publish or download continues (those steps belong to other tasks).

**Later visits:** *Sign in* in the header. Their accounts are listed; picking one opens its site. *New site* creates another account (up to 3 free; once a site has a purchase it no longer counts, which frees a spot). Someone who isn't signed in sees the Studio exactly as today.

**Your account page:** email, sign-in method, password reset, the list of accounts (pagename, domain, title, last edited), *Rename*, *Delete*, *Download all my data*, *Sign out*.

**Rename:** pick a new pagename (same checks). Tick *Keep the old address and forward it* and the old pagename stays reserved and points to the new one, using one of the 3 free accounts. A pagename can't be handed to another person.

**Delete:** asks to type the pagename to confirm. The design is kept for 30 days (so a mistake can be undone), then removed.

## 4. What gets built (when you say OK)

Built in this order, each step tested before the next:

| Step | What | Who does it |
|---|---|---|
| A. Setup | Create the Supabase project, Google sign-in, and the sign-up email sender (§6) | **You**, with click-by-click steps from me |
| B. Database and its rules | Tables for logins, accounts, projects, roles and reserved names; the rules that make sure nobody can read or change someone else's work (Supabase calls these *row-level security*); the 3-free-account limit (accounts with a purchase not counted) and the pagename rules checked **by the database itself**, so they can't be skipped by tampering with the page | Claude |
| C. Sign-up and sign-in | The sign-up window at Publish and Download code, *Sign in* in the header, the account switcher, the *Your account* page, password reset | Claude |
| D. Saving online | Each account's project is saved online a few seconds after changes; the browser copy stays as a backup so the Studio still works offline; the work already in the browser moves into the first account; Undo/Redo and save points keep working | Claude |
| E. Testing robot | New tests for sign-up, pagename checks, the 3-free-account limit (and that a paid account doesn't count), rename, delete, and "someone can't see another person's work" | Claude |

Roughly 3 to 5 working sessions with Claude after setup.

**How the pieces fit:** the Studio stays a static site on GitHub Pages. It talks straight to Supabase from the browser. That is safe because the database rules (step B) decide what each login may see, not the page. No secret keys are ever put in the website.

**What the data looks like (simplified):**

```
logins     one row per person (made by Supabase when they sign up)
accounts   login · domain · pagename · title · description · status (active, forwarding, deleted) · forwards to · paid (yes once anything is bought for it)
           → a pagename can appear once per domain; a login can have at most 3 accounts that are not paid
projects   account · the saved design · last saved
roles      login · role (baker-approved, admin, escrow, rezsite-reviewer); only administrators can change this
reserved   words nobody can take as a pagename
```

**Not in this task** (they have their own roadmap tasks): publishing, the cart and card, the pagename email address, the pagename GitHub repository, Baker profiles, handing work to a Baker (the database leaves room for the editing lock), the admin control room.

## 5. Files it would change

`studio/src/store.js` (saving and loading), `studio/src/App.jsx` (header: Sign in, account switcher), new `studio/src/lib/cloud.js`, new `studio/src/components/Account*.jsx`, the Publish / Download / Request buttons in `studio/src/steps/Step5.jsx`, new `supabase/` folder (database setup scripts), new tests in `studio/tests/`, and `package.json` (adds `@supabase/supabase-js`).

**Overlap warning:** *Two Studios* and *The cart and its total at the top right* also change the header (`App.jsx`) and maybe `store.js`. Best order: build those two first (they don't need you), then this one, so nothing collides. ROADMAP.json should list these files under this task's `touches` before it's built (a note for Merge and publish).

## 6. Costs

| What | Now (building and testing) | Before the public launch | Later, with lots of people |
|---|---|---|---|
| **Supabase** (logins, database, saving) | **Free**: 50,000 active users a month, 500 MB database, 2 projects | **Pro, $25 US a month** (recommended, see risks 1 and 2) | Pro includes 100,000 active users a month, then about $3.25 per extra 1,000 |
| **Sign-up emails** (confirm, reset password) via Resend | **Free**: 3,000 a month, at most 100 a day | Free is likely enough for a soft launch | $20 US a month for 50,000 emails, no daily limit |
| **Google sign-in** | Free | Free | Free |
| **Bot protection** on the sign-up form (Cloudflare Turnstile) | Free | Free | Free |
| **Total** | **$0** | **about $25 US a month** | about $45 US a month and up |

Sources: [Supabase pricing](https://supabase.com/pricing), [Supabase on its built-in email sender](https://supabase.com/docs/guides/auth/auth-smtp), [Resend pricing](https://resend.com/pricing).

## 7. Risks and how the plan handles them

1. **Free Supabase projects go to sleep** after a week with no visitors, and a free project has no automatic backups. Fine while building; before real people sign up, move to Pro ($25/month), which never sleeps and keeps daily backups.
2. **Supabase's own email sender is for testing only** (a couple of emails an hour). Real sign-ups need our own sender: Resend, sending from something like `hello@bakeaweb.com`. That needs a few DNS records at Porkbun on bakeaweb.com. The *Pagename email addresses* task also changes email DNS, so the two are done carefully (they can live side by side).
3. **Big designs.** Uploaded images are stored inside the design today, so one design can be several megabytes. 500 MB fills after a few hundred image-heavy sites. Fix, built into step D: uploaded images go to Supabase file storage (1 GB free, 100 GB on Pro) and the design keeps only a link.
4. **Fake and bot sign-ups, and pagename hoarding** (one person making many logins to grab good names; the 3-free limit helps). Bot check on the form, confirmed email before publishing, reserved words, and the *Trust and safety* task for the rest.
5. **Lookalike pagenames** (`paypal`, `cra-refund`). A starter blocked list now; the *Trust and safety* task adds proper checks.
6. **Losing the administrator login** would lock you out of everything. Your admin login gets two-step sign-in, and a second administrator should exist.
7. **Privacy law (PIPEDA).** Collecting emails means a privacy policy and a way to delete your data. The *Terms and policies* task drafts it; this task adds *Download all my data* and *Delete*. Recommended: store the data in Supabase's **Canada** region.
8. **The RezSite Nation or community line** is personal. It is stored privately, never shown publicly, and only the RezSite reviewer can read it.
9. **Two computers editing the same site.** The last save wins, and the Studio warns "this site was changed on another device" before overwriting.
10. **Lock-in.** Low: Supabase is a standard Postgres database, so the data can be moved elsewhere later.

## 8. What you'll do yourself (later, only after your OK)

I'll give you every click when we get there. In short:

1. Make a free Supabase account and project ([supabase.com](https://supabase.com/dashboard)), Canada region.
2. Turn on Google sign-in: a free Google Cloud project with a sign-in screen ([Google Cloud console](https://console.cloud.google.com/)) and paste two codes into Supabase.
3. Make a free Resend account ([resend.com](https://resend.com/)), add bakeaweb.com, and copy its DNS records into Porkbun.
4. Make a free Cloudflare Turnstile key ([Cloudflare dashboard](https://dash.cloudflare.com/)) for the bot check.

About 45 minutes in total. No card is needed for any of these on the free plans.

## 9. Questions for you

My recommendation is in **bold** after each. Answering "go with your recommendations" is fine.

1. **Code download without publishing:** which domain does the pagename belong to? **Ask for a pagename on bakedby.me (or rezsite.com) at code download too, so every site has one home address.**
2. **Sites on the client's own domain:** do they still need a pagename? **Yes: every site has a bakedby.me or rezsite.com pagename as its ID and backup address, even if it lives on its own domain.**
3. **bakedbya.pro pagenames** are Baker names. Does a Baker's portfolio count as one of their free accounts? **No: a Baker gets one bakedbya.pro name with their Baker profile, separate from the 3.**
4. **After a pagename is deleted or renamed** (without forwarding), when can someone else take it? **After 90 days, so nobody can grab a known address and pretend to be the old owner.**
5. **Hyphens:** allow a hyphen at the end, or two in a row (`sun--rise`, `sunrise-`)? **No to both.**
6. **Title and description length:** **title up to 60 characters, description up to 160** (what search engines show).
7. **Confirm the email before publishing?** **Yes for email-and-password sign-ups** (Google is already confirmed). They can keep designing while they wait.
8. **Store the data in Canada?** **Yes.**
9. **When to start paying for Supabase Pro ($25 US/month)?** **Free while building; Pro right before inviting the public.**
10. **Order of building:** **build *Two Studios* and *The cart* first, then this task**, so the header changes don't collide (§5).

---

**Status:** approved; setup (§8) started 2026-11-08. Done so far: Supabase project `bakeaweb` in Canada (Central) and the database with all its rules, tested (step B, see `supabase/`). Next: sign-in addresses and Google sign-in (owner), then the sign-up email sender.

**Still to confirm:** does *any* purchase free up a spot, even the $5 badge removal? This plan assumes yes (the cart marks the account paid once it's checked out). A paid site that is later deleted doesn't give its spot back to a free site.
