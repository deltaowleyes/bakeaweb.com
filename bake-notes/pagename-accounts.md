# bake-notes: pagename-accounts

Decisions from the owner on 2026-11-08, to fold into the docs at **Merge and publish** (this task may not edit them itself).

## VISION.md
- §3 *Logins and accounts*: "up to **5 free accounts**" → "up to **3 free accounts**". **An account with any purchase doesn't count toward the 3** (so paying customers can have as many sites as they like).
- §3 *Renaming*: "uses one of the 5 accounts" → "uses one of the 3 free accounts".
- §3 *Cards* and §5 *AI images*: "**10 free per login**" → "**5 free** once a card is validated".
- §3: pagename rules approved as in `plans/pagename-accounts.md` §9: no hyphen at the end or two in a row; title up to 60 characters, description up to 160; email confirmed before publishing; a released pagename can be taken by someone else after 90 days; data stored in Canada.
- §3: every site has a bakedby.me or rezsite.com pagename, including code-download-only and own-domain sites. A Baker's bakedbya.pro name comes with their Baker profile and doesn't count toward the 3.

## ROADMAP.json
- *Pagename accounts* (`pagename-accounts`): blurb and prompt say 5 accounts → 3 free accounts (paid accounts don't count). Plan approved; set `ready` to `now` once setup is done, and `touches`: `studio/src/store.js`, `studio/src/App.jsx`, `studio/src/lib/cloud.js`, `studio/src/components/`, `studio/src/steps/Step5.jsx`, `studio/package.json`, `supabase/`, `studio/tests/`. Build after *Two Studios* and *The cart* (both change `App.jsx`).
- *AI image limits: card first, 10 free* (`ai-image-credits-for-pro`): title and text 10 → 5.
- *Real AI images*: any "10 free" wording → 5.

## plans/vision-talk.md
- Add under Talk 2 (or a short Talk 3): free accounts per login 5 → 3, purchased accounts don't count; free AI images 10 → 5 with a validated card.
