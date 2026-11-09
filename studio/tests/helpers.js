/* Shared test helpers: a fresh studio with the internet switched off, and a console-error watcher. */
import { test as base, expect } from '@playwright/test';

/* Things that are not studio bugs: blocked outside requests (the robot works offline on purpose). */
const IGNORE = [/Failed to load resource/i, /net::ERR_/i, /fonts\.(googleapis|gstatic)\.com/i, /Download the React DevTools/i];

export const test = base.extend({
  /** Every test gets a list of console errors and uncaught page errors; it must be empty at the end. */
  errors: [async ({ page }, use) => {
    const errors = [];
    page.on('console', m => { if (m.type() == 'error' && !IGNORE.some(r => r.test(m.text()))) errors.push('console: ' + m.text()); });
    page.on('pageerror', e => errors.push('page error: ' + e.message));
    page.on('dialog', d => d.accept());   // "Delete this section?" and similar confirms
    // Keep tests fast and repeatable: only the studio itself may load; outside sites are blocked.
    await page.route(u => !/^(https?:\/\/(127\.0\.0\.1|localhost)(:\d+)?\/|data:|blob:|about:)/.test(u.href), r => r.abort());
    await use(errors);
    expect(errors, 'no console errors').toEqual([]);
  }, { auto: true }]
});
export { expect };

/** Open the studio with nothing saved, at a given version and step. */
export async function openStudio(page, { v = 'pro', step = 1 } = {}) {
  await page.goto(`./?v=${v}#step-${step}`);
  await page.evaluate(() => localStorage.clear());
  await page.goto(`./?v=${v}#step-${step}`);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('BAKE Studio');
}

/** Step 1 → "No, start fresh" → a starter site. */
export async function makeStarter(page, { name = 'Sunrise Bakery', desc = 'Fresh bread every morning', kind = 'food' } = {}) {
  await page.getByRole('button', { name: 'No, start fresh' }).click();
  await page.locator('#fname').fill(name);
  await page.locator('#fdesc').fill(desc);
  await page.locator('#ftype').selectOption(kind);
  await page.getByRole('button', { name: 'Create starter site' }).click();
  await expect(page.locator('#found')).toContainText(name);
}

/** Go to a step with the header buttons. */
export async function goStep(page, n) {
  await page.getByRole('navigation', { name: 'Steps' }).getByRole('button').nth(n - 1).click();
  await expect(page.locator(`#h${n}s`)).toBeVisible();
}

/** The project state (window.BAKE.state()). */
export const state = page => page.evaluate(() => JSON.parse(JSON.stringify(window.BAKE.state())));

/** Wait until a live preview frame shows the generated page. */
export async function expectLivePreview(page) {
  const frame = page.frameLocator('iframe').first();
  await expect(frame.locator('.pv section').first()).toBeVisible();
}

/** Wait until a PRO screenshot preview has a real picture. */
export async function expectScreenshot(page, scope = page) {
  const img = scope.locator('figure.shot img').first();
  await expect(img).toHaveAttribute('src', /^(blob:|data:)/);
  await expect.poll(() => img.evaluate(i => i.complete && i.naturalWidth)).toBeGreaterThan(100);
}

/** Pretend the project uses an unpaid premium item, so previews switch to screenshots (editions.js setPremiumCheck).
    Takes effect on the next change (for example makeStarter or goStep). */
export const unpaidPremium = (page, on = true) => page.evaluate(on => window.BAKE.premium(on ? () => true : null), on);
