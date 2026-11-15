# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: tests/engine.spec.js >> designer families bring their own fonts and dark families stay readable
- Location: tests/engine.spec.js:46:1

# Error details

```
Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
Call log:
  - navigating to "./?v=pro#step-1", waiting until "load"

```

# Test source

```ts
  1  | /* Shared test helpers: a fresh studio with the internet switched off, and a console-error watcher. */
  2  | import { test as base, expect } from '@playwright/test';
  3  | 
  4  | /* Things that are not studio bugs: blocked outside requests (the robot works offline on purpose). */
  5  | /* Previews are sandboxed iframes without allow-scripts on purpose, so the browser's 'Blocked script execution' notice is expected. */
  6  | const IGNORE = [/Failed to load resource/i, /net::ERR_/i, /fonts\.(googleapis|gstatic)\.com/i, /Download the React DevTools/i, /Blocked script execution in 'about:(blank|srcdoc)' because the document's frame is sandboxed/i];
  7  | 
  8  | export const test = base.extend({
  9  |   /** Every test gets a list of console errors and uncaught page errors; it must be empty at the end. */
  10 |   errors: [async ({ page }, use) => {
  11 |     const errors = [];
  12 |     page.on('console', m => { if (m.type() == 'error' && !IGNORE.some(r => r.test(m.text()))) errors.push('console: ' + m.text()); });
  13 |     page.on('pageerror', e => errors.push('page error: ' + e.message));
  14 |     page.on('dialog', d => d.accept());   // "Delete this section?" and similar confirms
  15 |     // Keep tests fast and repeatable: only the studio itself may load; outside sites are blocked.
  16 |     await page.route(u => !/^(https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?\/|data:|blob:|about:)/.test(u.href), r => r.abort());
  17 |     await use(errors);
  18 |     expect(errors, 'no console errors').toEqual([]);
  19 |   }, { auto: true }]
  20 | });
  21 | export { expect };
  22 | 
  23 | /** Open the studio with nothing saved, at a given version and step. */
  24 | export async function openStudio(page, { v = 'pro', step = 1 } = {}) {
> 25 |   await page.goto(`./?v=${v}#step-${step}`);
     |              ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  26 |   await page.evaluate(() => localStorage.clear());
  27 |   await page.goto(`./?v=${v}#step-${step}`);
  28 |   await expect(page.getByRole('heading', { level: 1 })).toContainText('BAKE Studio');
  29 | }
  30 | 
  31 | /** Step 1 → "No, start fresh" → a starter site. */
  32 | export async function makeStarter(page, { name = 'Sunrise Bakery', desc = 'Fresh bread every morning', kind = 'food' } = {}) {
  33 |   await page.getByRole('button', { name: 'No, start fresh' }).click();
  34 |   await page.locator('#fname').fill(name);
  35 |   await page.locator('#fdesc').fill(desc);
  36 |   await page.locator('#ftype').selectOption(kind);
  37 |   await page.getByRole('button', { name: 'Create starter site' }).click();
  38 |   await expect(page.locator('#found')).toContainText(name);
  39 | }
  40 | 
  41 | /** Go to a step with the header buttons. */
  42 | export async function goStep(page, n) {
  43 |   await page.getByRole('navigation', { name: 'Steps' }).getByRole('button').nth(n - 1).click();
  44 |   await expect(page.locator(`#h${n}s`)).toBeVisible();
  45 | }
  46 | 
  47 | /** The project state (window.BAKE.state()). */
  48 | export const state = page => page.evaluate(() => JSON.parse(JSON.stringify(window.BAKE.state())));
  49 | 
  50 | /** Wait until a live preview frame shows the generated page. */
  51 | export async function expectLivePreview(page) {
  52 |   const frame = page.frameLocator('iframe').first();
  53 |   await expect(frame.locator('.pv section').first()).toBeVisible();
  54 | }
  55 | 
  56 | /** Wait until a PRO screenshot preview has a real picture. */
  57 | export async function expectScreenshot(page, scope = page) {
  58 |   const img = scope.locator('figure.shot img').first();
  59 |   await expect(img).toHaveAttribute('src', /^(blob:|data:)/);
  60 |   await expect.poll(() => img.evaluate(i => i.complete && i.naturalWidth)).toBeGreaterThan(100);
  61 | }
  62 | 
  63 | /** Pretend the project uses an unpaid premium item, so previews switch to screenshots (editions.js setPremiumCheck).
  64 |     Takes effect on the next change (for example makeStarter or goStep). */
  65 | export const unpaidPremium = (page, on = true) => page.evaluate(on => window.BAKE.premium(on ? () => true : null), on);
  66 | 
```