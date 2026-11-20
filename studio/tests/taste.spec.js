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

/* This or That (Nov 20, 2026): two sites side by side, click the better one. Fakes Supabase; nothing real is touched. */
const REF = 'gpwxuunutljcauoknhrh';
const SITES = [1, 2, 3].map(i => ({ id: i, kind: 'biz', name: 'Site ' + i, website: 'https://site' + i + '.example', city: 'Town', sort: i, claude_score: 50 }));
async function fakeTaste(page, inserts) {
  const user = { id: 'u1', email: 'tester@example.com', aud: 'authenticated', role: 'authenticated' };
  const session = { access_token: 'x.eyJleHAiOjQxMDI0NDQ4MDB9.x', refresh_token: 'r', token_type: 'bearer', expires_in: 3600, expires_at: 4102444800, user };
  await page.addInitScript(([k, s]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, s); }, [`sb-${REF}-auth-token`, JSON.stringify(session)]);
  let n = 0;
  await page.route(`https://${REF}.supabase.co/**`, async route => {
    const req = route.request(), url = req.url();
    const json = body => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(body) });
    if (url.includes('/auth/v1/user')) return json(user);
    if (url.includes('/auth/v1/token')) return json(session);
    if (url.includes('/rpc/taste_pair_next')) { n++; return json([n % 2 ? { site_a: 1, site_b: 2 } : { site_a: 2, site_b: 3 }]); }
    if (url.includes('/rest/v1/taste_sites')) return json(SITES);
    if (url.includes('/rest/v1/taste_ratings')) return json([]);
    if (url.includes('/rest/v1/taste_pairs')) {
      if (req.method() == 'POST') { const b = JSON.parse(req.postData()); inserts.push(b); return json({ id: inserts.length, rater: 'u1', rater_email: user.email, ...b }); }
      if (req.method() == 'DELETE') { inserts.push({ deleted: url }); return route.fulfill({ status: 204, body: '' }); }
      return json([]);
    }
    return json(null);
  });
}

test('This or That: pick with a key, note saved, the pair and note survive a reload, Undo works', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'uses the dev server');
  const inserts = [];
  await fakeTaste(page, inserts);
  await page.goto('taste.html#pair');
  await expect(page.locator('.pair .side')).toHaveCount(2);
  const left = await page.locator('.side[data-side="a"] h2').textContent();
  await page.locator('#pnote').fill('own photos beat stock');
  // reload: same pair, note still there
  await page.reload();
  await expect(page.locator('.side[data-side="a"] h2')).toHaveText(left);
  await expect(page.locator('#pnote')).toHaveValue('own photos beat stock');
  await expect(page.locator('#pclk')).toHaveText(/\ds/);   // both pictures failed (offline) -> clock starts anyway
  await page.waitForTimeout(2200);
  await page.locator('body').click({ position: { x: 5, y: 5 } });
  await page.keyboard.press('ArrowLeft');
  await expect.poll(() => inserts.length).toBe(1);
  const leftId = SITES.find(s => s.name == left).id;
  expect(inserts[0].winner).toBe(leftId);
  expect(inserts[0].note).toBe('own photos beat stock');
  expect([inserts[0].site_a, inserts[0].site_b]).toContain(leftId);
  expect(inserts[0].seconds).toBeGreaterThanOrEqual(2);
  await expect(page.locator('#prog')).toContainText('Your picks: 1');
  await page.getByRole('button', { name: 'Undo last pick' }).click();
  await expect.poll(() => inserts.some(i => i.deleted)).toBe(true);
  await expect(page.locator('#prog')).toContainText('Your picks: 0');
});

test('This or That: tie saves winner = null, and too-quick picks are refused', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'uses the dev server');
  const inserts = [];
  await fakeTaste(page, inserts);
  await page.goto('taste.html#pair');
  await expect(page.locator('#pclk')).toHaveText(/\ds/);
  await page.getByRole('button', { name: /About the same/ }).click();
  await expect(page.locator('#pm')).toContainText('one more look');
  await page.waitForTimeout(2200);
  await page.getByRole('button', { name: /About the same/ }).click();
  await expect.poll(() => inserts.length).toBe(1);
  expect(inserts[0].winner).toBeNull();
});

test('This or That helpers: winner id from the choice', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules (runs in the normal test run)');
  await page.goto('taste.html');
  const r = await page.evaluate(async () => { globalThis.BAKE_TASTE_NO_START = true; const m = await import('/src/taste.js'); return [m.pairWinner('a', 5, 9), m.pairWinner('b', 5, 9), m.pairWinner('tie', 5, 9), m.PAIR_MIN]; });
  expect(r).toEqual([5, 9, null, 2]);
});
