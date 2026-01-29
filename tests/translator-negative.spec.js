import { test, expect } from '@playwright/test';

test.describe('Negative Functional Tests – Singlish to Sinhala', () => {

  test('NEG_FUN_001 – Empty input should not translate', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    // Leave Singlish input empty
    await page.fill('textarea', '');

    // Wait to allow any translation attempt
    await page.waitForTimeout(3000);

    // Validate: No Sinhala characters should appear
    await expect(page.locator('body')).not.toContainText('ම');
  });

});
