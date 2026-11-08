/* The robot's main walk: all five steps, every version, with no console errors. */
import { readFileSync } from 'node:fs';
import { test, expect, openStudio, makeStarter, goStep, state, expectLivePreview, expectScreenshot } from './helpers.js';

const SAMPLE = readFileSync(new URL('./fixtures/sample-site.html', import.meta.url), 'utf8');

test('the studio opens with five steps and the version picker', async ({ page }) => {
  await openStudio(page);
  const steps = page.getByRole('navigation', { name: 'Steps' }).getByRole('button');
  await expect(steps).toHaveText(['1. Your site', '2. Brand', '3. Sections', '4. Menu', '5. Templates'].map(t => new RegExp(t.replace('.', '\\.'))));
  await expect(page.getByRole('group', { name: 'BAKE version' }).getByRole('button')).toHaveCount(4);
});

for (const v of ['express', 'rezsite', 'baker', 'pro']) {
  test(`every step opens without errors (${v})`, async ({ page }) => {
    await openStudio(page, { v });
    await makeStarter(page);
    for (let n = 1; n <= 5; n++) await goStep(page, n);
    expect((await state(page)).edition).toBe(v);
  });
}

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

test('step 3 (PRO): screenshot preview with click-to-edit boxes', async ({ page }) => {
  await openStudio(page, { v: 'pro' });
  await makeStarter(page);
  await goStep(page, 3);
  await expectScreenshot(page);
  await expect.poll(() => page.evaluate(() => (window.BAKE.maps()[0] || { boxes: [] }).boxes.length)).toBeGreaterThan(3);
  // PRO never leaves the generated page code in the studio
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

test('step 5 (PRO): template preview is a screenshot', async ({ page }) => {
  await openStudio(page, { v: 'pro' });
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
