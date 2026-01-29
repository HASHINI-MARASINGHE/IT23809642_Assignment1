import { test, expect } from '@playwright/test';

test.describe('Positive Functional Tests – Singlish to Sinhala', () => {

  test('POS_FUN_001 – Simple sentence translation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama gedhara yanavaa');
    await page.waitForTimeout(4000);

    // Expect some Sinhala text to appear on the page
    await expect(page.locator('body')).toContainText('ම');
  });

  test('POS_FUN_002 – Question sentence translation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'oyaata kohomadha?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('ද');
  });

  test('POS_FUN_003 – Compound sentence translation', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill(
      'textarea',
      'mama gedhara yanavaa, namuth vahina nisaa yanne naehae'
    );
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('නැ');
  });

  test('POS_FUN_004 – Mixed English word handling', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'api Kandy yamu');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('යමු');
  });

});
