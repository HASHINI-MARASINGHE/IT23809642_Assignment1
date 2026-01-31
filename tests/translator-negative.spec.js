import { test, expect } from '@playwright/test';

test.describe('Negative Functional Tests – Singlish to Sinhala (10)', () => {

  async function translate(page, input) {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    const inputBox = page.locator('textarea:not([readonly])');
    const outputBox = page.locator('textarea[readonly]');

    await inputBox.fill(input);

    // wait until system produces some output
    await expect(outputBox).not.toHaveValue('');

    return (await outputBox.inputValue()).trim();
  }

  test('NEG_FUN_0001 -  Inputs containing punctuation marks ', async ({ page }) => {
    const actual = await translate(page, 'oyaa kaeema kaevadha???');
    const correct = 'ඔයා කෑම කැවද?';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0002 - Random characters', async ({ page }) => {
    const actual = await translate(page, 'jnjdnejnvdkxcsme');
    expect(actual).not.toBe('jnjdnejnvdkxcsme');
  });

  test('NEG_FUN_0003 - Line breaks (multi-line input) ', async ({ page }) => {
    const actual = await translate(page, 'mama gedhara yanavaa oyaa enavadha?');
    const correct = 'මම ගෙදර යනවා';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0004 -  Tense variations (past)', async ({ page }) => {
    const actual = await translate(page, 'MAMA NAENDHAVA DHAEKKAA');
    const correct = 'මම නැන්දව දැක්කා';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0005 - Numbers only', async ({ page }) => {
    const actual = await translate(page, '1234566');
    expect(actual).not.toBe('1234566');
  });

  test('NEG_FUN_0006 - Multi-word expressions', async ({ page }) => {
    const actual = await translate(page, 'mammmmm naaanavaaaa');
    const correct = 'මම නානවා';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0007 - Sentences containing places and common English words that should remain as they are ', async ({ page }) => {
    const actual = await translate(page, 'hasini oyaa adha udhee galle yanavaa kivvaa needha?');
    const correct = 'හසිනි ඔයා අද උදේ ගාල්ලේ යනවා කිව්වා නේද?';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0008 - Missing spaces / joined words', async ({ page }) => {
    const actual = await translate(page, 'mamagameeyanavaa');
    const correct = 'මම ගමේ යනවා';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0009 - Extra spaces in sentence', async ({ page }) => {
    const actual = await translate(page, 'mama    igena      gannavaa');
    const correct = 'මම ඉගෙන ගන්නවා';
    expect(actual).not.toBe(correct);
  });

  test('NEG_FUN_0010 - Typographical error', async ({ page }) => {
    const actual = await translate(page, 'mama rata yanawaa');
    const correct = 'මම රට යනwආ';
    expect(actual).not.toBe(correct);
  });

});
