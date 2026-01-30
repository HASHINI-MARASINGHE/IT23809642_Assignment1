import { test, expect } from '@playwright/test';

const negativeSentences = [
  { id: 'NEG_FUN_0001', text: 'oyaa kaeema kaevadha???' },
  { id: 'NEG_FUN_0002', text: 'oya mata kiyannadha?' },
  { id: 'NEG_FUN_0003', text: 'mama gedhara yanavaa\no yaa enavadha?' },
  { id: 'NEG_FUN_0004', text: 'MAMA NAENDHAVA DHAEKKAA' },
  { id: 'NEG_FUN_0005', text: 'mama ?gedhara !yanavaa' },
  { id: 'NEG_FUN_0006', text: 'mammmmm naaanavaaaa' },
  { id: 'NEG_FUN_0007', text: 'hasini oyaa adha udhee galle yanavaa kivvaa needha?' },
  { id: 'NEG_FUN_0008', text: 'mamagameeyanavaa' },
  { id: 'NEG_FUN_0009', text: 'mama    igena           gannavaa' },
  { id: 'NEG_FUN_0010', text: 'mama rata yanavvaa' }
];

negativeSentences.forEach(({ id, text }) => {
  test(`${id} - Negative Functional Translation`, async ({ page }) => {
    test.setTimeout(120000);

    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.click('textarea');
    await page.waitForTimeout(1000);

    // WORD-BY-WORD typing (same logic as POS)
    const words = text.split(' ');
    for (const word of words) {
      await page.keyboard.type(word);
      await page.keyboard.press('Space');
      await page.waitForTimeout(2000);
    }

    // Final wait
    await page.waitForTimeout(4000);

    // Basic stability check (NEGATIVE = no crash)
    await expect(page.locator('textarea')).toBeVisible();

    // Screenshot proof
    await page.screenshot({
      path: `screenshots/${id}.png`,
      fullPage: true
    });

    console.log(`⚠️ ${id} completed | Input: "${text}"`);
  });
});
