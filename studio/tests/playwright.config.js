/* BAKE Studio testing robot (Playwright). Run from studio/: `npm test`.
   It starts its own copy of the studio (Vite dev server) on a random free port, so several
   test runs and parallel BAKE tasks never collide, then clicks through all five steps in Chrome. */
import { defineConfig } from '@playwright/test';
import { chromium } from '@playwright/test';
import { existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

// One port for the whole run: workers re-read this file but inherit the environment.
process.env.BAKE_TEST_PORT ||= String(20000 + Math.floor(Math.random() * 30000));
const port = +process.env.BAKE_TEST_PORT;
// BAKE_TEST_BUILT=1 tests the finished build (studio/dist, the same files that go into docs/) instead of the source.
const built = !!process.env.BAKE_TEST_BUILT;

// Use Playwright's own Chromium if installed (`npx playwright install chromium`), otherwise the
// Chrome already on this computer, or the one named in CHROME_PATH.
let launchOptions = {};
if (process.env.CHROME_PATH) launchOptions = { executablePath: process.env.CHROME_PATH };
else { try { if (!existsSync(chromium.executablePath())) launchOptions = { channel: 'chrome' }; } catch (e) { launchOptions = { channel: 'chrome' }; } }

export default defineConfig({
  testDir: '.',
  testMatch: /.*\.spec\.js$/,
  timeout: 60_000,
  expect: { timeout: 15_000 },
  fullyParallel: true,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never', outputFolder: './.report' }]] : 'list',
  outputDir: './.results',
  use: {
    baseURL: `http://127.0.0.1:${port}/`,
    viewport: { width: 1400, height: 900 },
    launchOptions,
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure'
  },
  webServer: {
    command: `npx vite ${built ? 'preview' : ''} --host 127.0.0.1 --port ${port} --strictPort`,
    cwd: fileURLToPath(new URL('..', import.meta.url)),
    url: `http://127.0.0.1:${port}/`,
    reuseExistingServer: false,
    timeout: 60_000
  }
});
