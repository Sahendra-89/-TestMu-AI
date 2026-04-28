// playwright.config.js
// @ts-check
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  // ── Test discovery ─────────────────────────────────────────────────────────
  testDir: './tests',

  // ── Parallel execution ─────────────────────────────────────────────────────
  fullyParallel: true,   // each test file runs in its own worker
  workers: 2,            // minimum 2 parallel workers as required

  // ── Retry / CI guards ──────────────────────────────────────────────────────
  retries: 1,            // retry once on failure (helps with flaky network)
  forbidOnly: !!process.env.CI,

  // ── Reporting ──────────────────────────────────────────────────────────────
  reporter: [
    ['list'],            // real-time console output
    ['html', { open: 'never', outputFolder: 'playwright-report' }],
  ],

  // ── Global browser settings ────────────────────────────────────────────────
  use: {
    headless: false,                  // run with browser visible
    viewport: { width: 1366, height: 768 },
    screenshot: 'only-on-failure',    // capture screenshots on failure
    video: 'retain-on-failure',       // save video on failure
    trace: 'on-first-retry',          // trace on retry for debugging
    actionTimeout: 15000,             // max time for each action
    navigationTimeout: 30000,         // max time for page navigation
  },

  // ── Browser projects ───────────────────────────────────────────────────────
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // Uncomment to also run on Firefox / Safari:
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
