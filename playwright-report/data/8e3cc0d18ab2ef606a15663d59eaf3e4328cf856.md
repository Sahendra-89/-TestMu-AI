# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: amazon.spec.js >> TC-01 | Search iPhone → Extract Price → Add to Cart
- Location: tests\amazon.spec.js:17:1

# Error details

```
TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
Call log:
  - waiting for locator('#twotabsearchtextbox') to be visible
    - waiting for" https://www.amazon.in/" navigation to finish...
    - navigated to "https://www.amazon.in/"

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - heading "Click the button below to continue shopping" [level=4] [ref=e9]
    - button "Continue shopping" [ref=e18] [cursor=pointer]
  - generic [ref=e21]:
    - link "Conditions of Use & Sale" [ref=e22] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_cou?ie=UTF8&nodeId=200545940
    - link "Privacy Notice" [ref=e23] [cursor=pointer]:
      - /url: https://www.amazon.in/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=200534380
  - generic [ref=e24]: © 1996-2025, Amazon.com, Inc. or its affiliates
```

# Test source

```ts
  1   | /**
  2   |  * helpers.js
  3   |  * Reusable utility functions for Amazon automation tests.
  4   |  * Centralises all page interactions to avoid code duplication.
  5   |  */
  6   | 
  7   | const { expect } = require('@playwright/test');
  8   | 
  9   | const BASE_URL = 'https://www.amazon.in';
  10  | 
  11  | /**
  12  |  * Navigate to Amazon and search for a product.
  13  |  * @param {import('@playwright/test').Page} page
  14  |  * @param {string} productName
  15  |  */
  16  | async function searchProduct(page, productName) {
  17  |   await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });
  18  | 
  19  |   // Dismiss any popup / sign-in overlay if present
  20  |   const dismissBtn = page.locator('#nav-global-location-popover-link');
  21  |   if (await dismissBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
  22  |     await page.keyboard.press('Escape');
  23  |   }
  24  | 
  25  |   const searchBox = page.locator('#twotabsearchtextbox');
> 26  |   await searchBox.waitFor({ state: 'visible', timeout: 15000 });
      |                   ^ TimeoutError: locator.waitFor: Timeout 15000ms exceeded.
  27  |   await searchBox.fill(productName);
  28  |   await page.keyboard.press('Enter');
  29  | 
  30  |   // Wait for search results to load
  31  |   await page.waitForSelector('.s-main-slot .s-result-item', { timeout: 20000 });
  32  |   console.log(`\n🔍 Searched for: "${productName}"`);
  33  | }
  34  | 
  35  | /**
  36  |  * Click the first organic (non-sponsored) search result.
  37  |  * Returns the page/tab that contains the product — handles both same-tab
  38  |  * and new-tab navigation transparently.
  39  |  *
  40  |  * @param {import('@playwright/test').Page} page
  41  |  * @returns {Promise<import('@playwright/test').Page>} productPage
  42  |  */
  43  | async function clickFirstResult(page) {
  44  |   // Target the first result that is NOT a sponsored ad
  45  |   const resultSelector =
  46  |     '.s-main-slot [data-component-type="s-search-result"] h2 a.a-link-normal';
  47  | 
  48  |   await page.waitForSelector(resultSelector, { timeout: 20000 });
  49  | 
  50  |   const firstResult = page.locator(resultSelector).first();
  51  |   await firstResult.scrollIntoViewIfNeeded();
  52  | 
  53  |   // Listen for a potential new tab before clicking
  54  |   const [newPage] = await Promise.all([
  55  |     page.context().waitForEvent('page', { timeout: 5000 }).catch(() => null),
  56  |     firstResult.click(),
  57  |   ]);
  58  | 
  59  |   let productPage = newPage ?? page;
  60  | 
  61  |   await productPage.waitForLoadState('domcontentloaded', { timeout: 20000 });
  62  |   console.log(`📄 Product page URL: ${productPage.url()}`);
  63  |   return productPage;
  64  | }
  65  | 
  66  | /**
  67  |  * Extract and log the product price from the product detail page.
  68  |  * Tries multiple selectors to handle different Amazon price layouts.
  69  |  *
  70  |  * @param {import('@playwright/test').Page} productPage
  71  |  * @param {string} productName
  72  |  * @returns {Promise<string>} price text
  73  |  */
  74  | async function extractPrice(productPage, productName) {
  75  |   const priceSelectors = [
  76  |     '.a-price .a-price-whole',       // Standard price
  77  |     '#priceblock_ourprice',           // Alternate layout
  78  |     '#priceblock_dealprice',          // Deal price
  79  |     '.apexPriceToPay .a-price-whole', // Apex price block
  80  |     '#corePrice_feature_div .a-price-whole',
  81  |   ];
  82  | 
  83  |   let price = null;
  84  | 
  85  |   for (const selector of priceSelectors) {
  86  |     try {
  87  |       const el = productPage.locator(selector).first();
  88  |       const visible = await el.isVisible({ timeout: 3000 });
  89  |       if (visible) {
  90  |         price = (await el.innerText()).trim().replace(/\n/g, '');
  91  |         break;
  92  |       }
  93  |     } catch {
  94  |       // Try next selector
  95  |     }
  96  |   }
  97  | 
  98  |   if (price) {
  99  |     console.log(`💰 ${productName} Price: ₹${price}`);
  100 |   } else {
  101 |     console.warn(`⚠️  Could not extract price for "${productName}". Page may require sign-in.`);
  102 |     price = 'N/A';
  103 |   }
  104 | 
  105 |   return price;
  106 | }
  107 | 
  108 | /**
  109 |  * Add the current product to the cart.
  110 |  * Handles the "Add to Cart" button and waits for confirmation.
  111 |  *
  112 |  * @param {import('@playwright/test').Page} productPage
  113 |  */
  114 | async function addToCart(productPage) {
  115 |   const addToCartBtn = productPage.locator('#add-to-cart-button');
  116 | 
  117 |   await addToCartBtn.waitFor({ state: 'visible', timeout: 15000 });
  118 |   await addToCartBtn.scrollIntoViewIfNeeded();
  119 |   await addToCartBtn.click();
  120 | 
  121 |   // Wait for cart confirmation — Amazon shows a success banner or redirects
  122 |   try {
  123 |     await productPage.waitForSelector(
  124 |       '#NATC_SMART_WAGON_CONF_MSG_SUCCESS, #attachDisplayAddBaseAlert, #sw-atc-confirmation',
  125 |       { timeout: 10000 }
  126 |     );
```