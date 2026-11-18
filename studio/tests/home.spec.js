/* The bakeaweb.com home page (index.html) and the move of BAKE Studio to /studio/ (2026-11-17). */
import { test, expect } from '@playwright/test';

test('home page: headline, free-preview button and a working link to BAKE Studio', async ({ page }) => {
  await page.goto('./');
  await expect(page.locator('h1')).toContainText('bake for a');
  await expect(page.getByRole('link', { name: 'Get my free preview' }).first()).toHaveAttribute('href', /^mailto:leah@rezsite\.com/);
  const studio = page.getByRole('link', { name: 'Open BAKE Studio' });
  await expect(studio).toHaveAttribute('href', 'studio/');
  await studio.click();
  await expect(page).toHaveURL(/\/studio\/$/);
  await page.waitForFunction(() => window.BAKE);
});

test('home page: every image and font loads', async ({ page }) => {
  const bad = [];
  page.on('response', r => { if (r.status() >= 400) bad.push(r.status() + ' ' + r.url()); });
  await page.goto('./');
  await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 500) { scrollTo(0, y); await new Promise(r => setTimeout(r, 30)); } });
  await page.evaluate(() => document.fonts.ready);
  const broken = await page.evaluate(() => [...document.images].filter(i => !i.complete || !i.naturalWidth).map(i => i.src));
  expect(broken).toEqual([]);
  expect(bad).toEqual([]);
});

test('old studio links on the home address forward to /studio/', async ({ page }) => {
  await page.goto('./?v=pro#step-2');
  await expect(page).toHaveURL(/\/studio\/\?v=pro#step-2$/);
  await page.goto('./#admin');
  await expect(page).toHaveURL(/\/studio\/#admin$/);
});

test('phone: home page has no sideways scrolling', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('./');
  expect(await page.evaluate(() => document.documentElement.scrollWidth - innerWidth)).toBeLessThanOrEqual(0);
});
