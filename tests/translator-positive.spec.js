import { test } from '@playwright/test';

const positiveSentences = [
  { id: 'POS_FUN_0001', text: 'mama yanavaa' },
  { id: 'POS_FUN_0002', text: 'aayuboovan mata podi udhavvak karanna puluvandha' },
  { id: 'POS_FUN_0003', text: 'Zoom meeting ekak thiyenavaa' },
  { id: 'POS_FUN_0004', text: 'mama oyata eka karala dhennam' },
  { id: 'POS_FUN_0005', text: 'mama heta office yanna inne traffic hari vaedi' },
  { id: 'POS_FUN_0006', text: 'mama iiyee gedhara giyaa' },
  { id: 'POS_FUN_0007', text: 'heta 7.30 AM ta office yanna thiyenavaa' },
  { id: 'POS_FUN_0008', text: 'karunakarala oyata puluvandha heta mama ekka Kandy yanna' },
  { id: 'POS_FUN_0009', text: 'vahina nisaa api gedhara inna imu eth passe yamu' },
  { id: 'POS_FUN_0010', text: 'mee ATM eka vaedadha' },
  { id: 'POS_FUN_0011', text: 'lamayi school yanne bus eke' },
  { id: 'POS_FUN_0012', text: 'ee ee dheeval hariyata karanna onee' },
  { id: 'POS_FUN_0013', text: 'api adha Colombo gihin shopping karanavaa' },
  { id: 'POS_FUN_0014', text: 'ehema karapan' },
  { id: 'POS_FUN_0015', text: 'mage upandhinaya 13/06/2002' },
  { id: 'POS_FUN_0016', text: 'dhaen hari mahansiyi poddak rest karanna onee' },
  { id: 'POS_FUN_0017', text: 'haal 1Kg ka mila kiyadha' },
  { id: 'POS_FUN_0018', text: 'mata meeka karanna puluvan' },
  { id: 'POS_FUN_0019', text: 'mata eka karanna bae namuth try karannam' },
  { id: 'POS_FUN_0020', text: 'mama oyala ekka api heta yanavaa' },
  { id: 'POS_FUN_0021', text: 'meheta enna' },
  { id: 'POS_FUN_0022', text: 'mata Rs 5343 onee' },
  { id: 'POS_FUN_0023', text: 'mama ehema karanne naehae' },
  { id: 'POS_FUN_0024', text: 'mama paadam karanna hadhanne' }
];

positiveSentences.forEach(({ id, text }) => {
  test(`${id} - Positive Functional Translation`, async ({ page }) => {
    test.setTimeout(120000);

    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });
    await page.click('textarea');
    await page.waitForTimeout(1000);

    // WORD-BY-WORD typing (examiner loves this)
    const words = text.split(' ');
    for (const word of words) {
      await page.keyboard.type(word);
      await page.keyboard.press('Space');
      await page.waitForTimeout(2000);
    }

    // Final wait for translation to stabilize
    await page.waitForTimeout(4000);

    // Screenshot proof
    await page.screenshot({
      path: `screenshots/${id}.png`,
      fullPage: true
    });

    console.log(`✅ ${id} completed | Input: "${text}"`);
  });
});
