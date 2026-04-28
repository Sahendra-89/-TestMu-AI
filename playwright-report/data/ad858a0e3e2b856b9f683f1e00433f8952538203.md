# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.ts >> Amazon Homepage >> should search for a product
- Location: tests\amazon.spec.ts:15:7

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: page.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#twotabsearchtextbox')
    - waiting for navigation to finish...
    - navigated to "https://www.amazon.com/"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - heading "Click the button below to continue shopping" [level=4] [ref=e9]
    - button "Continue shopping" [ref=e18] [cursor=pointer]
  - generic [ref=e21]:
    - link "Conditions of Use" [ref=e22] [cursor=pointer]:
      - /url: https://www.amazon.com/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=508088
    - link "Privacy Policy" [ref=e23] [cursor=pointer]:
      - /url: https://www.amazon.com/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=468496
  - generic [ref=e24]: © 1996-2025, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test.describe('Amazon Homepage', () => {
  4  |   test('should load homepage and have correct title', async ({ page }) => {
  5  |     await page.goto('/');
  6  |     await expect(page).toHaveTitle(/Amazon/);
  7  |   });
  8  | 
  9  |   test('should display search bar', async ({ page }) => {
  10 |     await page.goto('/');
  11 |     const searchBox = page.locator('#twotabsearchtextbox');
  12 |     await expect(searchBox).toBeVisible();
  13 |   });
  14 | 
  15 |   test('should search for a product', async ({ page }) => {
  16 |     await page.goto('/');
> 17 |     await page.fill('#twotabsearchtextbox', 'laptop');
     |                ^ Error: page.fill: Test timeout of 30000ms exceeded.
  18 |     await page.click('#nav-search-submit-button');
  19 |     await expect(page).toHaveURL(/s\?k=laptop/);
  20 |     const results = page.locator('[data-component-type="s-search-result"]');
  21 |     await expect(results.first()).toBeVisible();
  22 |   });
  23 | });
  24 | 
```