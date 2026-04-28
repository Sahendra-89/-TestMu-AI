/**
 * amazon.spec.js
 * Amazon end-to-end test suite.
 *
 * Test Case 1 → Search "iPhone"       → extract price → add to cart
 * Test Case 2 → Search "Samsung Galaxy" → extract price → add to cart
 *
 * Both tests run in parallel (configured via playwright.config.js workers).
 */

const { test, expect } = require('@playwright/test');
const { searchAndAddToCart, searchProduct, BASE_URL } = require('../utils/helpers');

// ─────────────────────────────────────────────────────────────────────────────
// Test Case 1 : iPhone
// ─────────────────────────────────────────────────────────────────────────────
test('TC-01 | Search iPhone → Extract Price → Add to Cart', async ({ page }) => {
  console.log('\n==============================');
  console.log('  Test Case 1: iPhone');
  console.log('==============================');

  await searchAndAddToCart(page, 'iPhone');

  // Verify we are on Amazon domain (sanity assertion)
  expect(page.url()).toContain('amazon.in');
});

// ─────────────────────────────────────────────────────────────────────────────
// Test Case 2 : Samsung Galaxy
// ─────────────────────────────────────────────────────────────────────────────
test('TC-02 | Search Samsung Galaxy → Extract Price → Add to Cart', async ({ page }) => {
  console.log('\n==============================');
  console.log('  Test Case 2: Samsung Galaxy');
  console.log('==============================');

  await searchAndAddToCart(page, 'Samsung Galaxy');

  // Verify we are on Amazon domain (sanity assertion)
  expect(page.url()).toContain('amazon.in');
});
