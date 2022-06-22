import { test, expect } from '@playwright/test'

test('should show the Trips page with 3 card items', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  await expect(page.locator('h1')).toContainText('Recently viewed trips')
  const list = page.locator('.trip-card')
  await expect(list).toHaveCount(3)
})
