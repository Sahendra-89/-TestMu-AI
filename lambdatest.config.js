// lambdatest.config.js
// ──────────────────────────────────────────────────────────────────────────────
// LambdaTest Cloud Grid configuration for Playwright
//
// Prerequisites:
//   1. Create an account at https://www.lambdatest.com
//   2. Get your username & access key from:
//      https://accounts.lambdatest.com/security
//   3. Set environment variables:
//        set LT_USERNAME=<your_username>
//        set LT_ACCESS_KEY=<your_access_key>
//   4. Install LambdaTest Playwright SDK (if using tunnel):
//        npm install -D @lambdatest/playwright-driver
//
// Run with:
//   npx playwright test --config=lambdatest.config.js
// ──────────────────────────────────────────────────────────────────────────────

const { defineConfig } = require('@playwright/test');

const LT_USERNAME    = process.env.LT_USERNAME    || 'YOUR_LT_USERNAME';
const LT_ACCESS_KEY  = process.env.LT_ACCESS_KEY  || 'YOUR_LT_ACCESS_KEY';

// LambdaTest Playwright WebSocket endpoint
const LT_ENDPOINT = `wss://cdp.lambdatest.com/playwright?user=${LT_USERNAME}&accessKey=${LT_ACCESS_KEY}`;

module.exports = defineConfig({
  testDir: './tests',
  fullyParallel: true,
  workers: 2,
  retries: 1,
  timeout: 60000,

  reporter: [
    ['list'],
    ['html', { open: 'never', outputFolder: 'lt-report' }],
  ],

  use: {
    // LambdaTest capabilities are passed via connectOptions
    connectOptions: { wsEndpoint: LT_ENDPOINT },
    headless: true,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    actionTimeout: 20000,
    navigationTimeout: 40000,
  },

  projects: [
    {
      name: 'LT-Chrome-Windows',
      use: {
        // LambdaTest specific browser capabilities
        // Docs: https://www.lambdatest.com/support/docs/playwright-testing/
        'lt:options': {
          username:    LT_USERNAME,
          accessKey:   LT_ACCESS_KEY,
          browserName: 'Chrome',
          browserVersion: 'latest',
          platform:    'Windows 10',
          name:        'Amazon Automation - Chrome',
          build:       'Amazon-Playwright-Suite',
          project:     'Amazon Automation',
          network:     true,
          console:     true,
          visual:      true,
          video:       true,
        },
      },
    },
    {
      name: 'LT-Firefox-Windows',
      use: {
        'lt:options': {
          username:    LT_USERNAME,
          accessKey:   LT_ACCESS_KEY,
          browserName: 'MicrosoftEdge',
          browserVersion: 'latest',
          platform:    'Windows 11',
          name:        'Amazon Automation - Edge',
          build:       'Amazon-Playwright-Suite',
          project:     'Amazon Automation',
          network:     true,
          console:     true,
          visual:      true,
          video:       true,
        },
      },
    },
  ],
});
