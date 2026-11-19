/* Callers page (callers.html): the listing editor must never lose what a caller types during a call.
   Nov 19, 2026: Chris edited Greenhouse Food Productions during a call, opened their website window, came back,
   and the login refresh rebuilt the page, so "Save + mark verified" saved the OLD values. These tests fake
   Supabase (no real database is touched) and replay that. */
import { test, expect } from './helpers.js';

const REF = 'gpwxuunutljcauoknhrh';
const BIZ = { id: 2204, name: 'Test Food Co', phone: '905-000-0000', email: null, website: 'https://example.com', city: 'Ohsweken', province: 'Ontario', verified_at: null, edits: 0, past_calls: [] };

async function fake(page, saves) {
  const user = { id: 'u1', email: 'tester@example.com', aud: 'authenticated', role: 'authenticated' };
  const session = { access_token: 'x.eyJleHAiOjQxMDI0NDQ4MDB9.x', refresh_token: 'r', token_type: 'bearer', expires_in: 3600, expires_at: 4102444800, user };
  await page.addInitScript(([k, s]) => { if (!localStorage.getItem(k)) localStorage.setItem(k, s); }, [`sb-${REF}-auth-token`, JSON.stringify(session)]);
  await page.route(`https://${REF}.supabase.co/**`, async route => {
    const url = route.request().url(), name = url.split('/rpc/')[1]?.split('?')[0];
    const json = body => route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(body) });
    if (url.includes('/auth/v1/user')) return json(user);
    if (url.includes('/auth/v1/token')) return json(session);
    if (name === 'caller_me') return json({ id: 3, name: 'Tester', email: user.email, rate: 0 });
    if (name === 'caller_calls') return json([{ id: 1, business_id: BIZ.id, name: BIZ.name, phone: BIZ.phone, website: BIZ.website, sort_order: 1, locked_by: 3, outcome: null }]);
    if (name === 'caller_totals') return json({});
    if (name === 'caller_lock' || name === 'caller_start') return json({ ok: true });
    if (name === 'caller_business') return json(BIZ);
    if (name === 'caller_update_business') { saves.push(JSON.parse(route.request().postData())); return json({ ok: true }); }
    return json(null);
  });
}

test('listing edits survive coming back from the website window, a page reload, and get saved', async ({ page: first, context }) => {
  let page = first;
  test.skip(!!process.env.BAKE_TEST_BUILT, 'uses the dev server');
  const saves = [];
  await fake(page, saves);
  await page.goto('callers.html');
  await page.getByRole('button', { name: /Start call/ }).click();
  const phone = page.getByLabel('Phone', { exact: false }).first();
  await expect(phone).toHaveValue(BIZ.phone);
  await phone.fill('519-111-2222');
  await page.getByLabel(/Owner \/ contact person/).fill('Lesley');

  // what happened on Nov 19: the tab loses and regains focus (website window), Supabase re-announces the login
  await page.evaluate(() => {
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'hidden' }); document.dispatchEvent(new Event('visibilitychange', { bubbles: true }));
    Object.defineProperty(document, 'visibilityState', { configurable: true, get: () => 'visible' }); document.dispatchEvent(new Event('visibilitychange', { bubbles: true }));
  });
  await page.waitForTimeout(1500);
  await expect(phone).toHaveValue('519-111-2222');
  await expect(page.getByText(/Not saved yet/)).toBeVisible();

  // even closing the tab and opening the page again keeps the typing (kept in this browser until saved)
  await page.close({ runBeforeUnload: false });
  page = await context.newPage();
  await fake(page, saves);
  await page.goto('callers.html');
  await page.getByRole('button', { name: /Start call/ }).click();
  await expect(page.getByLabel('Phone', { exact: false }).first()).toHaveValue('519-111-2222');

  await page.getByRole('button', { name: /Save \+ mark verified/ }).click();
  await expect.poll(() => saves.length).toBe(1);
  expect(saves[0].p.phone).toBe('519-111-2222');
  expect(saves[0].p.contact_name).toBe('Lesley');
  expect(saves[0].p_verify).toBe(true);
});
