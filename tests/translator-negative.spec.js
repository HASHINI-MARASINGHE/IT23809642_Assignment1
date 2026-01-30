import { test, expect } from '@playwright/test';

test.describe('Negative Functional Tests – Singlish to Sinhala', () => {

  test('NEG_FUN_0001 - Inputs containing punctuation marks ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', ' oyaa kaeema kaevadha??? ');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).not.toContainText('ඔයා කෑම කැවද?');
  });

    test('NEG_FUN_0002 - Interrogative (questions) forms  ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', ' oya mata kiyannadha? ');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).not.toContainText('ඔයා මට කියන්නද?');
  });

    test('NEG_FUN_0003 - Line breaks (multi-line input) ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', ' mama gedhara yanavaa oyaa enavadha?');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).not.toContainText('මම ගෙදර යනවා ඔයා එනවද?');
  });

    test('NEG_FUN_0004-  Tense variations (past) ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'MAMA NAENDHAVA DHAEKKAA ');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).not.toContainText('මම නැන්දව දැක්කා');
  });

    test('NEG_FUN_0005 -  Inputs containing punctuation marks', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama ?gedhara !yanavaa');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).not.toContainText('මම ගෙදර යනවා');
  });

    test('NEG_FUN_0006 - Multi-word expressions', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', ' mammmmm naaanavaaaa');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).not.toContainText('මම නානවා');
  });

    test('NEG_FUN_0007 - Sentences containing places and common English words that should remain as they are ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', ' hasini oyaa adha udhee galle yanavaa kivvaa needha?');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).not.toContainText('හසිනි ඔයා අද උදේ ගාල්ලේ යනවා කිව්වා නේද?');
  });

    test('NEG_FUN_001 - Missing spaces / joined words ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', ' mamagameeyanavaa ');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).not.toContainText('මම ගමේ යනවා');
  });

    test('NEG_FUN_0009 - Multiple spaces in Singlish input ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', ' mama    igena           gannavaa');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).not.toContainText('ඔමම ඉගෙන ගන්නවා');
  });

      test('NEG_FUN_0010 - Typographical error in Singlish input', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama rata yanavvaa');

    await page.waitForTimeout(3000);

    await expect(page.locator('body')).not.toContainText('මම රට යනවා');
  });

});
