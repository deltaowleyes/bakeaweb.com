/* BAKE Markets (markets.html): future markets and the domain search. */
import { test, expect } from './helpers.js';

test('BAKE Markets asks for a sign-in, shows no markets without one, and stays out of search engines', async ({ page }) => {
  await page.goto('markets.html');
  await expect(page.locator('#lf')).toBeVisible();
  await expect(page.locator('table, .batch')).toHaveCount(0);
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', /noindex/);
});

test('BAKE Markets batch prompt has everything a new chat needs', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await page.goto('markets.html');
  const r = await page.evaluate(async () => {
    globalThis.BAKE_MARKETS_NO_START = true;
    const m = await import('/src/markets.js');
    return { p: m.batchPrompt(3, [{ id: 21, name: 'Lawyers', examples: 'law firms', tlds: '.lawyer' }]), s: m.STATUSES,
      out: [m.signedOut({ code: 'PGRST301', message: 'JWT expired' }), m.signedOut({ code: '23505', message: 'duplicate key' })] };
  });
  expect(r.p).toContain('batch 3');
  expect(r.p).toContain('gpwxuunutljcauoknhrh');
  expect(r.p).toContain('id 21: Lawyers');
  expect(r.p).toContain('on conflict ((lower(domain))) do nothing');
  expect(r.p).toContain('Do not buy anything');
  expect(r.s).toContain('available');
  expect(r.out).toEqual([true, false]);
});
