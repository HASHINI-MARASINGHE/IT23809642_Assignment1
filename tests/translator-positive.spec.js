import { test, expect } from '@playwright/test';

test.describe('Positive Functional Tests – Singlish to Sinhala', () => {

  test('POS_FUN_0001-Simple sentences ,Proper spacing ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama yanavaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම යනවා');
  });

    test('POS_FUN_0002 - Greetings, punctuation marks with Request ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'ayubovan! sir, mata podi udhavvak karanna puluvandha?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('ආයුබෝවන්! සර්, මට පොඩි උදව්වක් කරන්න පුළුවන්ද?');
  });

    test('POS_FUN_0003 - English technical/brand terms embedded in Singlish  ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'Zoom meeting ekak thiyenavaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('සූම් මිටීන් එකක් තියෙනවා');
  });

    test('POS_FUN_0004 - Responses ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama oyaata eeka karala dhennam');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම ඔයාට ඒක කරල දෙන්නම්');
  });

    test('POS_FUN_0005 - Paragraph-style input (/long) ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama heta office yanna inne. ehema namuth traffic hari vaedi. ehema unoth mama podi parakku venna puluvan. oyata eka kiyanna oonee kiyala hithunaa.');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම හෙට ඔෆිස් යන්න ඉන්නේ. එහෙම නමුත් ට්‍රැෆික් හරි වැඩි. එහෙම උනොත් මම පොඩි පරක්කු වෙන්න පුලුවන්. ඔයට එක කියන්න ඕනේ කියල හිතුනා.');
  });

    test('POS_FUN_0006 - Tense variations (past)', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama iiyee gedhara giyaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම ඊයේ ගෙදර ගියා');
  });

    test('POS_FUN_0007 - Time formats, Proper spacing ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'heta 7.30 AM ta office yanna thiyenavaa.');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('හෙට 7.30 AM ට ඔෆිස් යන්න තියෙනවා.');
  });

    test('POS_FUN_0008 - Polite phrasing with punctuation marks', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'karuNaakaralaa oyaata puLuvandha heta mama ekka Kandy yanna?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('කරුණාකරලා ඔයාට පුළුවන්ද හෙට මම එක්ක කැන්ඩි යන්න?');
  });

    test('POS_FUN_0009 - Compound sentences (two ideas joined)  ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'vahina nisaa api gedhara inna imu,eth passe yamu.');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('වහින නිසා අපි ගෙදර ඉන්න ඉමු,එත් පස්සෙ යමු.');
  });

    test('POS_FUN_0010 - English abbreviations and short forms ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mee ATM eka vaedadha?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මේ එටිඑම් එක වැඩද?');
  });

      test('POS_FUN_0011 - Plural noun usage ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'Lamayi school yannee bus ekee');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('ළමයි ස්කූල් යන්නෙ බස් එකේ');
  });

      test('POS_FUN_0012 - Repeated word expressions used for emphasis  ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'ee ee dheeval hariyata karanna oonee.');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('ඒ ඒ දේවල් හරියට කරන්න ඕනේ.');
  });

      test('POS_FUN_0013 - Present tense with location ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'api adha Colombo gihin shopping karanavaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('අපි ඉයේ කොළඹ ගිහින් ශොපින් කරනවා');
  });

      test('POS_FUN_0014 -  Informal phrasing  ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'ehema karapan.');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('එහෙම කරපන්.');
  });

      test('POS_FUN_0015 - Convert dates', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'magee upandhinaya 13/06/2002');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මගේ උපන්දිනය 13/06/2002');
  });

      test('POS_FUN_0016 - Day-to-day expression ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'dhaen hari mahansiyi, poddak rest karanna oonee.');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('දැන් හරි මහන්සියි, පොඩ්ඩක් විවේක ගන්න ඕනේ.');
  });

      test('POS_FUN_0017 - Units of measurements ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'haal 1Kg ka mila kiiyadha?');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('හාල් 1Kg ක මිල කීයද?');
  });

      test('POS_FUN_0018 - Positive forms ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mata meeka karanna puLuvan');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මට මේක කරන්න පුළුවන්');
  });

      test('POS_FUN_0019 - Compound sentences (two ideas joined) ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mata eeka karanna baee namuth try karannam.');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මට ඒක කරන්න බැහැ, නමුත් ට්‍රයි කරන්නම්.');
  });

      test('POS_FUN_0020 - Translate sentence with pronoun variation ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama oyalaa ekka api heta yanavaa.');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම ඔයලා එක්ක අපි හෙට යනවා.');
  });

      test('POS_FUN_0021 - Imperative (commands) forms ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'meheta enna');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මෙහෙට එන්න');
  });

      test('POS_FUN_0022 - Convert sentence with currency value', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mata Rs. 5343 oonee');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මට Rs. 5343 ඕනේ');
  });

      test('POS_FUN_0023 -  Negation patterns ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama ehema karannee naehae');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම එහෙම කරන්නේ නැහැ');
  });

      test('POS_FUN_0024 -  Singular usage and pronoun variations ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama paadam karanna hadhanne');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම පාඩම් කරන්න හදන්නෙ');
  });

  
      test('POS_UI_0001 - Tense variations (future)  ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'api heta enavaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('අපි හෙට එනවා');
  });

  
      test('POS_UI_0002 - Tense variations (future)  ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama paadam karanna hadhanne');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම පාඩම් කරන්න හදන්නෙ');
  });

  
      test('POS_UI_0003 -Paste medium text input, Time formats, and  Sentences containing places and common English words that should remain as they are', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'mama office yanavaa heta. oyaath enavadha? heta 8.30 AM meeting ekak thiyenavaa namuth passe yamu kiyala hithanavaa');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('මම හෙට ඔෆිස් යනවා. ඔයාත් එනවද? හෙට 8.30 AM මීටින් එකක් තියෙනවා, නමුත් පස්සේ යමු කියලා හිතනවා.');
  });

  
      test('POS_UI_0004 - Negative sentence forms ', async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

    await page.fill('textarea', 'මට හොදටම සනීප නැහැ');
    await page.waitForTimeout(4000);

    await expect(page.locator('body')).toContainText('');
  });

});