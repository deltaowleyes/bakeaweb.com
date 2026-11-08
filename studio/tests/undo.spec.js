/* Undo, redo and save points (store.js, App.jsx). */
import { test, expect, openStudio, makeStarter, goStep, state } from './helpers.js';

test('undo and redo a deleted section, by buttons and keys', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page);
  await goStep(page, 3);
  const count = async () => (await state(page)).pages[0].sections.length;
  const n = await count();
  await page.getByRole('button', { name: 'Delete section' }).last().click();
  await expect.poll(count).toBe(n - 1);
  await page.getByRole('button', { name: '↶ Undo' }).click();
  await expect.poll(count).toBe(n);
  await page.getByRole('button', { name: '↷ Redo' }).click();
  await expect.poll(count).toBe(n - 1);
  await page.locator('body').click({ position: { x: 5, y: 5 } });
  await page.keyboard.press('ControlOrMeta+z');
  await expect.poll(count).toBe(n);
});

test('fast typing in one box is one undo step', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page, { name: 'Sunrise' });
  await goStep(page, 2);
  const name = async () => (await state(page)).biz.name;
  const field = page.locator('#bname');
  await field.click();
  await field.press('End');
  await field.pressSequentially(' Bakery', { delay: 20 });
  await expect.poll(name).toBe('Sunrise Bakery');
  await page.getByRole('button', { name: '↶ Undo' }).click();
  await expect.poll(name).toBe('Sunrise');
});

test('Save point now is kept in this browser', async ({ page }) => {
  await openStudio(page);
  await makeStarter(page, { name: 'Keep Me' });
  await page.getByRole('button', { name: 'History' }).click();
  await page.getByRole('button', { name: 'Save point now' }).click();
  await expect(page.getByRole('dialog')).toContainText('Saved by you');
  await expect.poll(() => page.evaluate(() => (JSON.parse(localStorage.getItem('bake-studio-history') || '[]')).length)).toBeGreaterThan(0);
});
