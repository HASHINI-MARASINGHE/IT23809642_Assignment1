const { test, expect } = require('@playwright/test');

test('SwiftTranslator - Singlish to Sinhala translation', async ({ page }) => {
  // Open SwiftTranslator
  await page.goto('https://translate.sinhala.tools/', {
    timeout: 60000
  });

  // Type Singlish text
  await page.fill('textarea[placeholder*="Singlish"]', 'mama gedhara yanavaa');

  // Wait for translation
  await page.waitForTimeout(3000);

  // Get Sinhala output
  const output = await page.textContent('textarea[placeholder*="Sinhala"]');

  // Validate output exists
  expect(output).not.toBeNull();
  expect(output.length).toBeGreaterThan(0);
});
