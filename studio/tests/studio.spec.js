/* The robot's main walk: all five steps, every version, with no console errors. */
import { readFileSync } from 'node:fs';
import { test, expect, openStudio, makeStarter, goStep, state, expectLivePreview, expectScreenshot, unpaidPremium } from './helpers.js';

const SAMPLE = readFileSync(new URL('./fixtures/sample-site.html', import.meta.url), 'utf8');

test('the studio opens with five steps and the Studio picker', async ({ page }) => {
  await openStudio(page);
  const steps = page.getByRole('navigation', { name: 'Steps' }).getByRole('button');
  await expect(steps).toHaveText(['1. Your site', '2. Brand', '3. Sections', '4. Menu', '5. Templates'].map(t => new RegExp(t.replace('.', '\\.'))));
  const cards = page.getByRole('group', { name: 'BAKE Studio' }).getByRole('button');
  await expect(cards).toHaveCount(2);
  await expect(cards.nth(0)).toContainText('BAKE Studio PRO');
  await expect(cards.nth(1)).toContainText('BAKE Studio BAKER');
  expect((await state(page)).edition).toBe('pro');   // PRO is the default
});

for (const v of ['pro', 'baker']) {
  test(`every step opens without errors (${v})`, async ({ page }) => {
    await openStudio(page, { v });
    await makeStarter(page);
    for (let n = 1; n <= 5; n++) await goStep(page, n);
    expect((await state(page)).edition).toBe(v);
  });
}

for (const [v, want] of [['express', 'pro'], ['rezsite', 'pro'], ['indigihub', 'pro'], ['pro', 'pro'], ['baker', 'baker']]) {
  test(`old ?v=${v} link opens ${want.toUpperCase()}`, async ({ page }) => {
    await openStudio(page, { v });
    expect((await state(page)).edition).toBe(want);
  });
}

test('switching Studios: BAKER shows the Markets area, PRO doesn’t', async ({ page }) => {
  await openStudio(page);
  await expect(page.locator('#markets')).toHaveCount(0);
  await page.getByRole('group', { name: 'BAKE Studio' }).getByRole('button', { name: /BAKER/ }).click();
  await expect(page.locator('#markets')).toBeVisible();
  await expect(page.getByRole('list', { name: 'Markets' }).getByRole('listitem')).toHaveText([/Services/, /Templates/, /Sections/, /Extensions/]);
  await expect(page.locator('.edtag')).toHaveText('BAKER');
  expect(page.url()).toContain('v=baker');
  await page.getByRole('combobox', { name: 'BAKE Studio' }).selectOption('pro');   // the header menu
  await expect(page.locator('#markets')).toHaveCount(0);
  expect((await state(page)).edition).toBe('pro');
});

test('previews are live in both Studios until an unpaid premium item is used', async ({ page }) => {
  for (const v of ['pro', 'baker']) {
    await openStudio(page, { v });
    await makeStarter(page);
    await goStep(page, 3);
    await expectLivePreview(page);
  }
  await unpaidPremium(page);
  await goStep(page, 2);
  await expectScreenshot(page);
  await expect(page.locator('iframe')).toHaveCount(0);
});

test('step 5: where the site lives is chosen at Publish', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page);
  await goStep(page, 5);
  const dests = page.getByRole('radiogroup', { name: 'Where your site will live' }).getByRole('radio');
  await expect(dests).toHaveCount(3);   // bakedby.me, rezsite.com, own domain
  await expect(page.locator('#pubc')).toContainText('https://bakedby.me/yourname');
  await page.locator('#pname').fill('Sunrise!!');
  await expect(page.locator('#pname')).toHaveValue('sunrise');
  await page.getByRole('radio', { name: /rezsite\.com/ }).check();
  await expect(page.locator('#pubc')).toContainText('https://rezsite.com/sunrise');
  await page.locator('#pname').fill('9lives');
  await expect(page.locator('#pnhelp')).toHaveClass(/errmsg/);
  await page.getByRole('radio', { name: /Your own domain/ }).check();
  await expect(page.locator('#pname')).toHaveCount(0);
  expect((await state(page)).req.dest).toBe('own');
  // BAKER adds the bakedbya.pro portfolio
  await page.getByRole('combobox', { name: 'BAKE Studio' }).selectOption('baker');
  await expect(dests).toHaveCount(4);
});

test('step 1: paste-code import finds the name, menu and sections', async ({ page }) => {
  await openStudio(page);
  await page.getByText('Import didn’t work? Paste the page’s code instead').click();
  await page.locator('#paste').fill(SAMPLE);
  await page.getByRole('button', { name: 'Read code' }).click();
  await expect(page.locator('#found')).toContainText('Maple Creek');
  const S = await state(page);
  expect(S.menu.items.map(m => m.label)).toEqual(expect.arrayContaining(['Programs', 'Events', 'About']));
  expect(S.pages[0].sections.length).toBeGreaterThan(1);
  expect(S.pages.length).toBeGreaterThan(1);   // other menu pages become placeholders
});

test('step 1: blocked import (no internet) offers paste instead of crashing', async ({ page }) => {
  await openStudio(page);
  await page.locator('#url').fill('https://example.org/');
  await page.getByRole('button', { name: 'Import', exact: true }).click();
  await expect(page.locator('details.help')).toHaveAttribute('open', '');
  await expect(page.locator('.log')).toContainText('Paste the page’s code');
});

test('step 2: brand name, palettes and more artwork', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page);
  await goStep(page, 2);
  await page.locator('#bname').fill('Sunrise Bakery & Café');
  const before = (await state(page)).brand.opts.logo.length;
  await page.getByRole('button', { name: 'Generate more' }).first().click();
  await expect.poll(async () => (await state(page)).brand.opts.logo.length).toBeGreaterThan(before);
  const pals = page.locator('.pals button, .pals .pal');
  if (await pals.count() > 1) await pals.nth(1).click();
  expect((await state(page)).biz.name).toBe('Sunrise Bakery & Café');
  await expectLivePreview(page);
});

test('step 3: add, move and delete sections; live preview updates', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page);
  await goStep(page, 3);
  await expectLivePreview(page);
  const count = async () => (await state(page)).pages[0].sections.length;
  const n = await count();
  await page.getByRole('combobox', { name: 'Section type' }).selectOption('cta');
  await page.getByRole('button', { name: 'Add section' }).click();
  await expect.poll(count).toBe(n + 1);
  const order = async () => (await state(page)).pages[0].sections.map(x => x.id).join();
  const was = await order();
  await page.locator('button[aria-label="Move up"]:not([disabled])').first().click();
  await expect.poll(order).not.toBe(was);
  await page.getByRole('button', { name: 'Delete section' }).last().click();
  await expect.poll(count).toBe(n);
  // a new page
  await page.getByRole('button', { name: 'Add page' }).click();
  await expect.poll(async () => (await state(page)).pages.length).toBeGreaterThan(1);
  await expectLivePreview(page);
});

test('step 3 (unpaid premium): screenshot preview with click-to-edit boxes', async ({ page }) => {
  await openStudio(page);
  await unpaidPremium(page);
  await makeStarter(page);
  await goStep(page, 3);
  await expectScreenshot(page);
  await expect.poll(() => page.evaluate(() => (window.BAKE.maps()[0] || { boxes: [] }).boxes.length)).toBeGreaterThan(3);
  // screenshot previews never leave the generated page code in the studio
  await expect(page.locator('iframe')).toHaveCount(0);
  // clicking a headline in the screenshot opens the Inspector on that text
  await page.locator('button.ov-text').first().click();
  await expect.poll(async () => (await state(page)).ui.insp).toMatchObject({ open: true, tab: 'text' });
});

test('step 4: menu styles, links and groups', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page);
  await goStep(page, 4);
  const items = async () => (await state(page)).menu.items.length;
  const n = await items();
  await page.getByRole('button', { name: 'Add link', exact: true }).click();
  await page.getByRole('button', { name: 'Add group' }).click();
  await expect.poll(items).toBe(n + 2);
  await page.locator('.mtypes button').nth(1).click();
  await page.locator('#mlogo').selectOption('center');
  expect((await state(page)).menu.vp.desktop.logo).toBe('center');
  await expectLivePreview(page);
});

test('step 5: thumbnails, pick a template and request development', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page);
  await goStep(page, 5);
  // template thumbnails are real pictures
  const thumb = page.locator('.tc img').first();
  await expect(thumb).toHaveAttribute('src', /^(blob:|data:)/, { timeout: 30_000 });
  await page.getByRole('button', { name: 'Request development' }).click();
  await expect(page.getByRole('alert')).toContainText('Pick a template first');
  await page.getByRole('button', { name: 'Use this template' }).click();
  await page.locator('#rname').fill('Test Robot');
  await page.locator('#remail').fill('not-an-email');
  await page.getByRole('button', { name: 'Request development' }).click();
  await expect(page.getByRole('alert')).toContainText('valid email');
  await page.locator('#remail').fill('robot@example.com');
  await page.getByRole('button', { name: 'Request development' }).click();
  await expect(page.getByRole('alert')).toContainText('Request saved');
  const S = await state(page);
  expect(S.notes).toHaveLength(1);
  expect(S.tpl.pick).toBeTruthy();
});

test('step 5 (unpaid premium): template preview is a screenshot', async ({ page }) => {
  await openStudio(page);
  await unpaidPremium(page);
  await makeStarter(page);
  await goStep(page, 5);
  await expectScreenshot(page, page.locator('#tpc'));
});

test('work is saved and comes back after a reload', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page, { name: 'Remember Me Ltd' });
  await page.waitForTimeout(600);   // saving waits 250 ms after the last change
  await page.reload();
  expect((await state(page)).biz.name).toBe('Remember Me Ltd');
  await expect(page.locator('#found')).toContainText('Remember Me Ltd');
});
