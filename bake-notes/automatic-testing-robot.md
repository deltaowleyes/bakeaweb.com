# Automatic testing robot: notes for Merge and publish

Branch: `bake/automatic-testing-robot`. Status: done, ready to merge.

## What changed
- `studio/package.json` / `package-lock.json`: dev dependency `@playwright/test`; scripts `test`, `test:ui`, `test:install`.
- `studio/tests/`: Playwright config (own Vite server on a random free port; uses Playwright's Chromium or the local
  Chrome, or `CHROME_PATH`), `helpers.js` (fails any test with a console error; blocks outside sites), 17 tests in
  `studio.spec.js` and `engine.spec.js`, a sample site in `fixtures/`, `README.md`, `.gitignore` for reports.
- `studio/tests/ci/test.yml`: the GitHub Actions workflow.

## To do while merging (files this task wasn't allowed to touch)
1. **Copy `studio/tests/ci/test.yml` to `.github/workflows/test.yml`** (then delete the copy in `tests/ci/`, or keep
   it as the template). From then on GitHub runs the robot on every push; results are on the repo's **Actions** tab.
2. **CLAUDE.md › Publishing step 3:** replace "Test in headless Chrome (all five steps, no console errors)" with
   "`cd studio && npm test`, and after the build `BAKE_TEST_BUILT=1 npm test`; don't push if anything fails."
   **Parallel BAKE rule 4:** "Run `cd studio && npm test` before pushing your branch; add tests for what you built
   in `studio/tests/`."
3. **ARCHITECTURE.md §2 file tree:** add `studio/tests/  Playwright tests (npm test); see tests/README.md` and
   `.github/workflows/test.yml`; under **Packages** add dev `@playwright/test`. §7 test hook: mention the tests use it.
4. **ROADMAP.json:** mark `automatic-testing-robot` done. Its later parts (sign-up, tasks, Stripe test mode,
   publishing) are new spec files written by those tasks, so no follow-up task is needed.
5. GitHub Actions is free for public repos; for a private repo (the *make the repositories private* task) GitHub
   Pro includes 3,000 minutes a month, and one run takes about 3 minutes.
