# 🛒 Amazon Automation — Playwright + JavaScript

End-to-end test automation suite for [Amazon India](https://www.amazon.in) built with the **Playwright Test** framework using JavaScript.  
Supports **parallel local execution** and **LambdaTest cloud grid** integration.

---

## 📁 Project Structure

```
amazon-automation/
├── tests/
│   └── amazon.spec.js          # Test cases (TC-01: iPhone, TC-02: Samsung Galaxy)
├── utils/
│   └── helpers.js              # Reusable page-interaction functions
├── playwright.config.js        # Local Playwright configuration (2 workers, parallel)
├── lambdatest.config.js        # LambdaTest cloud grid configuration (bonus)
├── package.json                # Project metadata & npm scripts
└── README.md
```

---

## ✅ Test Cases

| # | Product | Actions |
|---|---------|---------|
| TC-01 | iPhone | Navigate → Search → Click 1st result → Print price → Add to cart |
| TC-02 | Samsung Galaxy | Navigate → Search → Click 1st result → Print price → Add to cart |

---

## ⚙️ Setup

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm v9 or higher

### Install dependencies

```bash
# 1. Install npm packages
npm install

# 2. Install Playwright browsers (Chromium, Firefox, WebKit)
npx playwright install
```

---

## ▶️ Running Tests

| Command | Description |
|---------|-------------|
| `npm test` | Run all tests in parallel (headless) |
| `npm run test:headed` | Run with browser window visible |
| `npm run test:ui` | Open Playwright's interactive UI mode |
| `npm run test:debug` | Step-through debugger mode |
| `npm run report` | Open last HTML test report |

---

## ⚡ Parallel Execution

Parallel execution is configured in `playwright.config.js`:

```js
module.exports = defineConfig({
  fullyParallel: true,  // ← each test runs in its own isolated context
  workers: 2,           // ← at least 2 tests run simultaneously
});
```

**How it works:**
- `fullyParallel: true` — Playwright does not wait for one test to finish before starting the next. Each test gets its own isolated browser context.
- `workers: 2` — two tests execute at the same time, cutting total run time roughly in half.
- Playwright automatically shards tests across workers based on available capacity.

---

## ☁️ LambdaTest Cloud Integration (Bonus)

[LambdaTest](https://www.lambdatest.com) lets you run Playwright tests on real browsers in the cloud without setting up local browsers.

### 1. Set environment variables

```bash
# Windows (Command Prompt)
set LT_USERNAME=your_lambdatest_username
set LT_ACCESS_KEY=your_lambdatest_access_key
```

```bash
# macOS / Linux
export LT_USERNAME=your_lambdatest_username
export LT_ACCESS_KEY=your_lambdatest_access_key
```

> Get credentials from: https://accounts.lambdatest.com/security

### 2. Run on LambdaTest

```bash
npm run test:lambdatest
```

This uses `lambdatest.config.js` which:
- Routes all tests through the **LambdaTest Playwright WebSocket endpoint**
- Runs on **Chrome (Windows 10)** and **Edge (Windows 11)** simultaneously
- Enables network logs, console logs, video recording, and visual testing on the dashboard

### 3. View results

Log into your [LambdaTest Dashboard](https://automation.lambdatest.com) to see session recordings, screenshots, and logs.

---

## 🔧 Key Design Decisions

| Decision | Reason |
|----------|--------|
| Reusable `helpers.js` | Avoid code duplication; both test cases share the same flow |
| Multi-selector price extraction | Amazon uses different price selectors across product types |
| New-tab detection | Some Amazon results open in a new tab; handled transparently |
| `retries: 1` | Handles transient network flakiness without masking real failures |
| `screenshot` + `video` on failure | Easy post-mortem debugging |

---

## 📊 Reports

After running tests, open the HTML report:

```bash
npm run report
```

The report is saved to `playwright-report/index.html`.

---

## 📝 Notes

- Amazon may redirect to a sign-in page for cart actions. If this happens, the test logs a warning and continues.
- Price extraction gracefully handles `N/A` when the product page is behind a login wall.
- Tests target `amazon.in` (India). Change `BASE_URL` in `utils/helpers.js` for other regions.
