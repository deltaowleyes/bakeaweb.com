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

test('Tasteaweb: 10 categories in 3 timed buckets, strict 5:00, overall = average', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await page.goto('taste.html');
  const r = await page.evaluate(async () => {
    globalThis.BAKE_TASTE_NO_START = true;
    const m = await import('/src/taste.js');
    const all = Object.fromEntries(m.CATS.map((c, i) => [c.k, i < 5 ? 40 : 80]));
    return {
      n: m.CATS.length, per: [1, 2, 3].map(b => m.CATS.filter(c => c.b == b).length),
      at: m.BUCKETS.map(b => b.at), save: m.SAVE_AT, avg: m.overall(all), none: m.overall({}),
      miss: m.missingCats({ polish: 50 }).length, quick: m.QUICK.length,
      p0: m.phaseAt(5), p2: m.phaseAt(200), p5: m.phaseAt(301), f: m.fmt(105)
    };
  });
  expect(r.n).toBe(10);
  expect(r.per).toEqual([4, 3, 3]);
  expect(r.at).toEqual([0, 15, 105]);
  expect(r.save).toBe(300);
  expect(r.avg).toBe(60);
  expect(r.none).toBeNull();
  expect(r.miss).toBe(9);
  expect(r.quick).toBeGreaterThan(3);
  expect(r.p0).toMatch(/Bucket 1/);
  expect(r.p2).toMatch(/Notes/);
  expect(r.p5).toMatch(/Ready/);
  expect(r.f).toBe('1:45');
});
