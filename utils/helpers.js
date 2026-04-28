/**
 * helpers.js
 * Reusable utility functions for Amazon automation tests.
 * Centralises all page interactions to avoid code duplication.
 */

const { expect } = require('@playwright/test');

const BASE_URL = 'https://www.amazon.in';

/**
 * Navigate to Amazon and search for a product.
 * @param {import('@playwright/test').Page} page
 * @param {string} productName
 */
async function searchProduct(page, productName) {
  await page.goto(BASE_URL, { waitUntil: 'domcontentloaded' });

  // Dismiss any popup / sign-in overlay if present
  const dismissBtn = page.locator('#nav-global-location-popover-link');
  if (await dismissBtn.isVisible({ timeout: 3000 }).catch(() => false)) {
    await page.keyboard.press('Escape');
  }

  const searchBox = page.locator('#twotabsearchtextbox');
  await searchBox.waitFor({ state: 'visible', timeout: 15000 });
  await searchBox.fill(productName);
  await page.keyboard.press('Enter');

  // Wait for search results to load
  await page.waitForSelector('.s-main-slot .s-result-item', { timeout: 20000 });
  console.log(`\n🔍 Searched for: "${productName}"`);
}

/**
 * Click the first organic (non-sponsored) search result.
 * Returns the page/tab that contains the product — handles both same-tab
 * and new-tab navigation transparently.
 *
 * @param {import('@playwright/test').Page} page
 * @returns {Promise<import('@playwright/test').Page>} productPage
 */
async function clickFirstResult(page) {
  // Target the first result that is NOT a sponsored ad
  const resultSelector =
    '.s-main-slot [data-component-type="s-search-result"] h2 a.a-link-normal';

  await page.waitForSelector(resultSelector, { timeout: 20000 });

  const firstResult = page.locator(resultSelector).first();
  await firstResult.scrollIntoViewIfNeeded();

  // Listen for a potential new tab before clicking
  const [newPage] = await Promise.all([
    page.context().waitForEvent('page', { timeout: 5000 }).catch(() => null),
    firstResult.click(),
  ]);

  let productPage = newPage ?? page;

  await productPage.waitForLoadState('domcontentloaded', { timeout: 20000 });
  console.log(`📄 Product page URL: ${productPage.url()}`);
  return productPage;
}

/**
 * Extract and log the product price from the product detail page.
 * Tries multiple selectors to handle different Amazon price layouts.
 *
 * @param {import('@playwright/test').Page} productPage
 * @param {string} productName
 * @returns {Promise<string>} price text
 */
async function extractPrice(productPage, productName) {
  const priceSelectors = [
    '.a-price .a-price-whole',       // Standard price
    '#priceblock_ourprice',           // Alternate layout
    '#priceblock_dealprice',          // Deal price
    '.apexPriceToPay .a-price-whole', // Apex price block
    '#corePrice_feature_div .a-price-whole',
  ];

  let price = null;

  for (const selector of priceSelectors) {
    try {
      const el = productPage.locator(selector).first();
      const visible = await el.isVisible({ timeout: 3000 });
      if (visible) {
        price = (await el.innerText()).trim().replace(/\n/g, '');
        break;
      }
    } catch {
      // Try next selector
    }
  }

  if (price) {
    console.log(`💰 ${productName} Price: ₹${price}`);
  } else {
    console.warn(`⚠️  Could not extract price for "${productName}". Page may require sign-in.`);
    price = 'N/A';
  }

  return price;
}

/**
 * Add the current product to the cart.
 * Handles the "Add to Cart" button and waits for confirmation.
 *
 * @param {import('@playwright/test').Page} productPage
 */
async function addToCart(productPage) {
  const addToCartBtn = productPage.locator('#add-to-cart-button');

  await addToCartBtn.waitFor({ state: 'visible', timeout: 15000 });
  await addToCartBtn.scrollIntoViewIfNeeded();
  await addToCartBtn.click();

  // Wait for cart confirmation — Amazon shows a success banner or redirects
  try {
    await productPage.waitForSelector(
      '#NATC_SMART_WAGON_CONF_MSG_SUCCESS, #attachDisplayAddBaseAlert, #sw-atc-confirmation',
      { timeout: 10000 }
    );
    console.log('🛒 Product successfully added to cart!\n');
  } catch {
    // Some regions redirect straight to cart page
    const url = productPage.url();
    if (url.includes('/cart') || url.includes('shoppingcart')) {
      console.log('🛒 Redirected to cart — product added successfully!\n');
    } else {
      console.warn('⚠️  Cart confirmation not detected. Please verify manually.\n');
    }
  }
}

/**
 * Master function — orchestrates search → click → price → add to cart.
 *
 * @param {import('@playwright/test').Page} page
 * @param {string} productName
 */
async function searchAndAddToCart(page, productName) {
  await searchProduct(page, productName);
  const productPage = await clickFirstResult(page);
  await extractPrice(productPage, productName);
  await addToCart(productPage);
}

module.exports = {
  searchProduct,
  clickFirstResult,
  extractPrice,
  addToCart,
  searchAndAddToCart,
  BASE_URL,
};
