/* BAKE Taste (taste.html): Chris and Leah's own design ratings. */
import { test, expect } from './helpers.js';

test('BAKE Taste asks for a sign-in, shows no sites without one, and stays out of search engines', async ({ page }) => {
  await page.goto('taste.html');
  await expect(page.locator('#lf')).toBeVisible();
  await expect(page.locator('.rate, table')).toHaveCount(0);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
});

test('BAKE Taste scale: every number has a meaning and the reason tags are good/bad lists', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await page.goto('taste.html');
  const r = await page.evaluate(async () => {
    globalThis.BAKE_TASTE_NO_START = true;
    const m = await import('/src/taste.js');
    return { a1: m.anchorFor(1), a50: m.anchorFor(50), a99: m.anchorFor(99), g: m.TAGS.g.length, b: m.TAGS.b.length };
  });
  expect(r.a1).toBe('Broken or embarrassing');
  expect(r.a50).toBe('OK small-business site');
  expect(r.a99).toBe('Best I have seen');
  expect(r.g).toBeGreaterThan(5);
  expect(r.b).toBeGreaterThan(5);
});

test('BAKE Taste has a Back button so a saved or skipped site can be fixed', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await page.goto('taste.html');
  const src = await page.evaluate(() => fetch('/src/taste.js').then(r => r.text()));
  expect(src).toMatch(/id=\\?"back\\?"/);
  expect(src).toContain('hist.pop()');
});

test('BAKE Taste keeps a rating when the sign-in has run out, instead of losing it', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await page.goto('taste.html');
  const r = await page.evaluate(async () => {
    globalThis.BAKE_TASTE_NO_START = true;
    const m = await import('/src/taste.js');
    return [
      m.signedOut({ code: '42501', message: 'new row violates row-level security policy for table "taste_ratings"' }),
      m.signedOut({ code: 'PGRST301', message: 'JWT expired' }),
      m.signedOut({ code: '23505', message: 'duplicate key' })
    ];
  });
  expect(r).toEqual([true, true, false]);
});
