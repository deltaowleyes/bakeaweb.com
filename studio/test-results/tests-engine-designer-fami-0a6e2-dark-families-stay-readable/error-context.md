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
  5  | const IGNORE = [/Failed to load resource/i, /net::ERR_/i, /fonts\.(googleapis|gstatic)\.com/i, /Download the React DevTools/i];
  6  | 
  7  | export const test = base.extend({
  8  |   /** Every test gets a list of console errors and uncaught page errors; it must be empty at the end. */
  9  |   errors: [async ({ page }, use) => {
  10 |     const errors = [];
  11 |     page.on('console', m => { if (m.type() == 'error' && !IGNORE.some(r => r.test(m.text()))) errors.push('console: ' + m.text()); });
  12 |     page.on('pageerror', e => errors.push('page error: ' + e.message));
  13 |     page.on('dialog', d => d.accept());   // "Delete this section?" and similar confirms
  14 |     // Keep tests fast and repeatable: only the studio itself may load; outside sites are blocked.
  15 |     await page.route(u => !/^(https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?\/|data:|blob:|about:)/.test(u.href), r => r.abort());
  16 |     await use(errors);
  17 |     expect(errors, 'no console errors').toEqual([]);
  18 |   }, { auto: true }]
  19 | });
  20 | export { expect };
  21 | 
  22 | /** Open the studio with nothing saved, at a given version and step. */
  23 | export async function openStudio(page, { v = 'pro', step = 1 } = {}) {
> 24 |   await page.goto(`./?v=${v}#step-${step}`);
     |              ^ Error: page.goto: Protocol error (Page.navigate): Cannot navigate to invalid URL
  25 |   await page.evaluate(() => localStorage.clear());
  26 |   await page.goto(`./?v=${v}#step-${step}`);
  27 |   await expect(page.getByRole('heading', { level: 1 })).toContainText('BAKE Studio');
  28 | }
  29 | 
  30 | /** Step 1 → "No, start fresh" → a starter site. */
  31 | export async function makeStarter(page, { name = 'Sunrise Bakery', desc = 'Fresh bread every morning', kind = 'food' } = {}) {
  32 |   await page.getByRole('button', { name: 'No, start fresh' }).click();
  33 |   await page.locator('#fname').fill(name);
  34 |   await page.locator('#fdesc').fill(desc);
  35 |   await page.locator('#ftype').selectOption(kind);
  36 |   await page.getByRole('button', { name: 'Create starter site' }).click();
  37 |   await expect(page.locator('#found')).toContainText(name);
  38 | }
  39 | 
  40 | /** Go to a step with the header buttons. */
  41 | export async function goStep(page, n) {
  42 |   await page.getByRole('navigation', { name: 'Steps' }).getByRole('button').nth(n - 1).click();
  43 |   await expect(page.locator(`#h${n}s`)).toBeVisible();
  44 | }
  45 | 
  46 | /** The project state (window.BAKE.state()). */
  47 | export const state = page => page.evaluate(() => JSON.parse(JSON.stringify(window.BAKE.state())));
  48 | 
  49 | /** Wait until a live preview frame shows the generated page. */
  50 | export async function expectLivePreview(page) {
  51 |   const frame = page.frameLocator('iframe').first();
  52 |   await expect(frame.locator('.pv section').first()).toBeVisible();
  53 | }
  54 | 
  55 | /** Wait until a PRO screenshot preview has a real picture. */
  56 | export async function expectScreenshot(page, scope = page) {
  57 |   const img = scope.locator('figure.shot img').first();
  58 |   await expect(img).toHaveAttribute('src', /^(blob:|data:)/);
  59 |   await expect.poll(() => img.evaluate(i => i.complete && i.naturalWidth)).toBeGreaterThan(100);
  60 | }
  61 | 
  62 | /** Pretend the project uses an unpaid premium item, so previews switch to screenshots (editions.js setPremiumCheck).
  63 |     Takes effect on the next change (for example makeStarter or goStep). */
  64 | export const unpaidPremium = (page, on = true) => page.evaluate(on => window.BAKE.premium(on ? () => true : null), on);
  65 | 
```