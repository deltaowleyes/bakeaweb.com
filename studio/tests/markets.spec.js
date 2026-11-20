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
    return { p: m.batchPrompt(3, [{ id: 21, name: 'Lawyers', examples: 'law firms', tlds: '.lawyer' },
        { id: 22, name: 'Dentists', examples: 'clinics', tlds: '.dental', biz_canada: 16000, biz_na: 196000, biz_world: 1200000, avg_site_usd: 5000 }]), s: m.STATUSES,
      out: [m.signedOut({ code: 'PGRST301', message: 'JWT expired' }), m.signedOut({ code: '23505', message: 'duplicate key' })],
      money: [m.money(45e9), m.money(1083675000000), m.money(66564000), m.money(2500), m.money(null)], count: [m.count(1800000), m.count(16000), m.count(13000000)],
      up: [m.upliftOf(45e9, 100), m.upliftOf(45e9, 60), m.upliftOf(45e9, null)] };
  });
  expect(r.p).toContain('biz_canada');
  expect(r.p).toContain('avg_site_usd');
  expect(r.p).toContain('quality_score');
  expect(r.p).toContain('max_uplift_usd');
  expect(r.p).toContain('Not sized yet');
  expect(r.p).toContain('Sized: 16K Canada / 196K North America / 1.2M world, $5,000 average site');
  expect(r.p).toContain('best one to choose next');
  expect(r.money).toEqual(['$45.0B', '$1.08T', '$66.6M', '$2,500', '']);
  expect(r.count).toEqual(['1.8M', '16K', '13M']);
  expect(r.up).toEqual([67500000, 24300000, null]);   // matches public.domain_max_uplift()
  expect(r.p).toContain('batch 3');
  expect(r.p).toContain('gpwxuunutljcauoknhrh');
  expect(r.p).toContain('id 21: Lawyers');
  expect(r.p).toContain('on conflict ((lower(domain))) do nothing');
  expect(r.p).toContain('Do not buy anything');
  expect(r.s).toContain('available');
  expect(r.out).toEqual([true, false]);
});
