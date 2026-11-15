/* BAKER Admin: opens from the BAKER Studio header, asks for a login, and its publishing rules work. */
import { test, expect, openStudio } from './helpers.js';

test('BAKER shows an Admin button that opens the admin sign-in; PRO does not', async ({ page }) => {
  await page.goto('./?v=pro');
  await expect(page.getByRole('button', { name: 'Admin', exact: true })).toHaveCount(0);
  await page.goto('./?v=baker');
  await page.getByRole('button', { name: 'Admin', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Sign in to Admin' })).toBeVisible();
  await page.getByRole('button', { name: '← Back to the studio' }).click();
  await expect(page.getByRole('heading', { name: 'Sign in to Admin' })).toHaveCount(0);
});

test('page names, addresses and files for publishing', async ({ page }) => {
  test.skip(!!process.env.BAKE_TEST_BUILT, 'needs the source modules');
  await openStudio(page);
  const r = await page.evaluate(async () => {
    const P = await import('/src/lib/publish.js');
    const { Render } = await import('/src/lib/render.js');
    const files = P.siteFiles(window.BAKE.state(), Render.TEMPLATES[0].id);
    return {
      sub: P.siteUrl('rezsite.com', 'sweettree'), path: P.siteUrl('bakedbya.pro', 'greyowl'),
      ok: P.nameProblem('greyowl'), short: P.nameProblem('ab'), digit: P.nameProblem('1abc'), caps: P.nameProblem('Abc'), www: P.nameProblem('www'),
      sug: P.suggestName('The Sweet Tree Cafe'), sug2: P.suggestName('RB Wilson Group'),
      index: files.some(f => f.path == 'index.html'), local: files.some(f => f.content.includes(location.origin + '/photos/'))
    };
  });
  expect(r.sub).toBe('https://sweettree.rezsite.com/');
  expect(r.path).toBe('https://bakedbya.pro/greyowl/');
  expect(r.ok).toBe('');
  for (const k of ['short', 'digit', 'caps', 'www']) expect(r[k]).not.toBe('');
  expect(r.sug).toBe('sweettree');
  expect(r.sug2).toBe('rbwilson');
  expect(r.index).toBe(true);
  expect(r.local).toBe(false);
});
