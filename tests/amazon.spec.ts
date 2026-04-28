import { test, expect } from '@playwright/test';

test.describe('Amazon Homepage', () => {
  test('should load homepage and have correct title', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveTitle(/Amazon/);
  });

  test('should display search bar', async ({ page }) => {
    await page.goto('/');
    const searchBox = page.locator('#twotabsearchtextbox');
    await expect(searchBox).toBeVisible();
  });

  test('should search for a product', async ({ page }) => {
    await page.goto('/');
    await page.fill('#twotabsearchtextbox', 'laptop');
    await page.click('#nav-search-submit-button');
    await expect(page).toHaveURL(/s\?k=laptop/);
    const results = page.locator('[data-component-type="s-search-result"]');
    await expect(results.first()).toBeVisible();
  });
});
