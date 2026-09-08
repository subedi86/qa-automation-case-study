const { test, expect } = require('@playwright/test');

test('GitHub public API health endpoint responds', async ({ request }) => {
  const response = await request.get('https://api.github.com/zen');

  expect(response.ok()).toBeTruthy();
  await expect(response.text()).resolves.toMatch(/\S/);
});