const { test, expect } = require('@playwright/test');

test('documentation landing page is usable', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Playwright/);
  await expect(page.getByRole('link', { name: 'Get started' })).toBeVisible();
});