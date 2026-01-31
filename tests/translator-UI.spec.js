import { test, expect } from '@playwright/test';

test('Pos_UI_0001 - Tense variations (future)  ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'api heta enavaa'
  );

  const sinhalaText = page.locator('text=අපි හෙට එනවා');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('අපි හෙට එනවා');

});