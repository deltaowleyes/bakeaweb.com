# BAKE Studio: notes for Claude

- Read `ARCHITECTURE.md` first. Source is in `studio/` (React + Vite + Tailwind); the BUILT site is in `docs/`, the only folder GitHub Pages serves at https://bakeaweb.com/ (Settings → Pages: branch `main`, folder `/docs`), so plans and source code are not on the website. The repo is `deltaowleyes/bakeaweb.com` (moved from `deltaowleyes/bake-studio` on 2026-11-07; the old repo only forwards visitors here).
- Templates and generated pages (`studio/src/lib/render.js`, `site.css`) stay plain HTML/CSS: PRO previews are screenshots, EXPRESS/RezSite/BAKER preview the live page (`LivePreview.jsx`), and `lib/site.js` makes the published files. Use React/Tailwind for the studio UI only.
- BAKE's plan is in `VISION.md`: bakeaweb.com (the studio's new home), bakedby.me (free EXPRESS sites), rezsite.com (free RezSite sites), bakedbya.pro (BAKER portfolios), PRO on clients' own domains. All four domains are at Porkbun. `docs/CNAME` contains `bakeaweb.com` (that is what puts the studio there); `place.mjs` writes it on every build, so never remove that line.
- The roadmap (BAKE PRO) is `ROADMAP.json`; after editing it, run `node studio/scripts/roadmap.mjs` to rewrite `ROADMAP.md`.
- The owner is not a developer. Explain in plain language with links, and offer BAKE / COPY BAKE buttons for next steps.

## Publishing (the owner never publishes; Claude does)
1. Push the current `main` to a backup branch first (for example `backup-YYYY-MM-DD-what`).
2. `cd studio && npm install && npm run build` (rebuilds `docs/`: `index.html`, `assets/`, `.nojekyll`, `CNAME`, `ROADMAP.json`). Never put other files in `docs/`: everything there is public.
3. Test in headless Chrome (all five steps, no console errors) before pushing.
4. Commit source + build together and push straight to `main`. If publishing fails, give the owner BAKE buttons to retry.

## Parallel BAKE (BAKE PRO 2.0)
Many BAKE tasks can run at the same time (in background agents or in separate Claude sessions). `ROADMAP.json` gives each task an `id`, a `ready` state (`now`, `plan`, `after`, `you`), the files it `touches`, and the tasks it waits for (`after`). `waves()` in `studio/scripts/roadmap.mjs` groups ready tasks whose files don't overlap.

Rules for a task running in parallel:
1. Start from the latest `main` of `deltaowleyes/bakeaweb.com` on a new branch `bake/<id>`. Only change the files in its `touches` (new files inside a listed folder are fine). If it truly needs another file, stop and say so instead of editing it.
2. `ready: plan` tasks only write `plans/<id>.md` (plain-language plan, costs, risks, questions for the owner). No code.
3. Never run `npm run build`, never commit `index.html`, `assets/`, `docs/` builds, and never push to `main`. Don't edit `ARCHITECTURE.md`, `VISION.md`, `ROADMAP.*`, `README.md` or this file; write what changed and what the docs should say in `bake-notes/<id>.md`.
4. Testing: `npm run dev -- --port <any free port>` or a headless Chrome check on a random free port, so parallel tasks don't collide. Run the existing tests if there are any.
5. Commit with a clear message and push the branch `bake/<id>`. Report the branch name.

**Merge and publish** (one session, after a wave): fetch all `bake/*` branches; merge `bake/publish-only-the-finished-website` first if it's in the wave (so plans never reach the public site); merge the rest one by one, fixing any small overlaps; fold `bake-notes/*.md` into the docs and mark finished tasks done in `ROADMAP.json` (keep every other task); then follow **Publishing** above (backup branch, build, test, push to `main`), and delete the merged `bake/*` branches.
