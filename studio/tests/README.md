# The testing robot

Playwright opens the studio in Chrome and clicks through it like a person would. Every test also fails if the
page shows **any console error**. Outside websites are blocked during tests, so results never depend on the internet.

| Command (run in `studio/`) | What it does |
|---|---|
| `npm test` | Runs every test against the source (starts its own studio on a random free port) |
| `BAKE_TEST_BUILT=1 npm test` | Tests the finished build in `studio/dist` instead (run after `npx vite build` or `npm run build`) |
| `npm run test:ui` | Opens Playwright's window to watch the robot work, step by step |
| `npm run test:install` | Installs Playwright's own Chromium (only needed if Chrome isn't on the computer) |

**What it checks now (17 tests):** the studio opens with five steps and four versions; every step in EXPRESS,
RezSite, BAKER and PRO; paste-code import (`fixtures/sample-site.html`); a blocked import offers Paste code; step 2
name, artwork and palettes; step 3 add, move and delete sections and pages with the live preview; PRO screenshots,
box map and click-to-edit; step 4 menu links, groups and styles; step 5 thumbnails, picking a template and the
request form's checks; saving and reloading; old v2 and IndigiHub projects opening; all 24 templates making page files.

**Adding a test:** make a new `something.spec.js` here, import `test`, `expect` and the helpers from `helpers.js`
(`openStudio`, `makeStarter`, `goStep`, `state`, `expectLivePreview`, `expectScreenshot`).
Later: sign-up, Baker tasks, Stripe payments in test mode and publishing get their own spec files as those features arrive.

Reports and failure screenshots go to `tests/.report` and `tests/.results` (not saved in git).
