import { test, expect } from '@playwright/test';

test('Pos_Fun_0001 -  Simple sentences ,Proper spacing ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  // 1. Type Singlish
  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mama yanavaa'
  );

  // 2. WAIT until Sinhala text appears (THIS IS THE KEY)
  const sinhalaText = page.locator('text=මම යනවා');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  // 3. Read the FULL output text
  const output = await sinhalaText.innerText();

  // 4. Assertion
  expect(output).toContain('මම යනවා');
});

test('Pos_Fun_0002 - Greetings, punctuation marks with Request', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'aayuboovan! mata podi udhavvak karanna puLuvandha?'
  );

  const sinhalaText = page.locator('text=ආයුබෝවන්! මට පොඩි උදව්වක් කරන්න පුළුවන්ද?');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('ආයුබෝවන්! මට පොඩි උදව්වක් කරන්න පුළුවන්ද?');
});

test('Pos_Fun_0003 - Convert Dates', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'dhesaembar naththal nivaaduvata kohedha yannee'
  );

  const sinhalaText = page.locator('text=දෙසැම්බර් නත්තල් නිවාඩුවට කොහෙද යන්නේ');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('දෙසැම්බර් නත්තල් නිවාඩුවට කොහෙද යන්නේ');
});

test('Pos_Fun_0004 -  Responses ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mama oyaata eeka karala dhennam'
  );

  const sinhalaText = page.locator('text=මම ඔයාට ඒක කරල දෙන්නම්');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මම ඔයාට ඒක කරල දෙන්නම්');
});

test('Pos_Fun_0005 - Paragraph-style input (/long) ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mama heta office yanna inne. ehema namuth traffic hari vaedi. ehema unoth mama podi parakku venna puluvan. oyata eka kiyanna oonee kiyala hithunaa.'
  );

  const sinhalaText = page.locator('text=මම හෙට office යන්න ඉන්නේ. එහෙම නමුත් traffic හරි වැඩි. එහෙම උනොත් මම පොඩි පරක්කු වෙන්න පුලුවන්. ඔයට එක කියන්න ඕනේ කියල හිතුනා.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මම හෙට office යන්න ඉන්නේ. එහෙම නමුත් traffic හරි වැඩි. එහෙම උනොත් මම පොඩි පරක්කු වෙන්න පුලුවන්. ඔයට එක කියන්න ඕනේ කියල හිතුනා.');
});

test('Pos_Fun_0006 - Tense variations (past)', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mama iiyee gedhara giyaa'
  );

  const sinhalaText = page.locator('text=මම ඊයේ ගෙදර ගියා');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මම ඊයේ ගෙදර ගියා');
});

test('Pos_Fun_0007 - Time formats, Proper spacing ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'heta 7.30 AM ta office yanna thiyenavaa.'
  );

  const sinhalaText = page.locator('text=හෙට 7.30 AM ට office යන්න තියෙනවා.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('හෙට 7.30 AM ට office යන්න තියෙනවා.');
});

test('Pos_Fun_0008 -Polite phrasing with punctuation marks', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'karuNaakaralaa oyaata puLuvandha heta mama ekka Kandy yanna?'
  );

  const sinhalaText = page.locator('text=කරුණාකරලා ඔයාට පුළුවන්ද හෙට මම එක්ක Kandy යන්න?');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('කරුණාකරලා ඔයාට පුළුවන්ද හෙට මම එක්ක Kandy යන්න?');
});

test('Pos_Fun_0009 -  Compound sentences (two ideas joined) ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'vahina nisaa api gedhara imu,eth passe yamu.'
  );

  const sinhalaText = page.locator('text=වහින නිසා අපි ගෙදර ඉමු,එත් පස්සෙ යමු');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('වහින නිසා අපි ගෙදර ඉමු,එත් පස්සෙ යමු.');
});

test('Pos_Fun_0010 - English abbreviations and short forms ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mee ATM eka vaedadha?'
  );

  const sinhalaText = page.locator('text=මේ ATM එක වැඩද?');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මේ ATM එක වැඩද?');
});

test('Pos_Fun_0011 - Plural noun usage', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'Lamayi school yannee bus ekee'
  );

  const sinhalaText = page.locator('text=ළමයි school යන්නේ bus එකේ');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('ළමයි school යන්නේ bus එකේ');
});

test('Pos_Fun_0012 -  Repeated word expressions used for emphasis ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'ee ee dheeval hariyata karanna oonee.'
  );

  const sinhalaText = page.locator('text=ඒ ඒ දේවල් හරියට කරන්න ඕනේ.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('ඒ ඒ දේවල් හරියට කරන්න ඕනේ.');
});

test('Pos_Fun_0013 - Present tense with location', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'api adha Colombo gihin shopping karanavaa'
  );

  const sinhalaText = page.locator('text=අපි අද Colombo ගිහින් shopping කරනවා');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('අපි අද Colombo ගිහින් shopping කරනවා');
});

test('Pos_Fun_0014 -  Informal phrasing ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'ehema karapan.'
  );

  const sinhalaText = page.locator('text=එහෙම කරපන්.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('එහෙම කරපන්.');
});

test('Pos_Fun_0015 - Convert dates', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'magee upandhinaya 13/06/2002'
  );

  const sinhalaText = page.locator('text=මගේ උපන්දිනය 13/06/2002');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මගේ උපන්දිනය 13/06/2002');
});

test('Pos_Fun_0016 - Day-to-day expression', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'dhaen hari mahansiyi, poddak rest karanna oonee.'
  );

  const sinhalaText = page.locator('text=දැන් හරි මහන්සියි, පොඩ්ඩක් rest කරන්න ඕනේ.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('දැන් හරි මහන්සියි, පොඩ්ඩක් rest කරන්න ඕනේ.');
});


test('Pos_Fun_0017 - Units of measurements ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'haal 1Kg ka mila kiiyadha?'
  );

  const sinhalaText = page.locator('text=හාල් 1Kg ක මිල කීයද?');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('හාල් 1Kg ක මිල කීයද?');
});

test('Pos_Fun_0018 - Positive forms ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mata meeka karanna puLuvan'
  );

  const sinhalaText = page.locator('text=මට මේක කරන්න පුළුවන්');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මට මේක කරන්න පුළුවන්');
});

test('Pos_Fun_0019 - Compound sentences (two ideas joined) ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mata eeka karanna baee namuth try karannam.'
  );

  const sinhalaText = page.locator('text=මට ඒක කරන්න බෑ නමුත් try කරන්නම්.');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මට ඒක කරන්න බෑ නමුත් try කරන්නම්.');
});

test('Pos_Fun_0020 - Translate sentence with pronoun variation', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'api adha dhivvemu'
  );

  const sinhalaText = page.locator('text=අපි අද දිව්වෙමු');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('අපි අද දිව්වෙමු');
});

test('Pos_Fun_0021 - Imperative (commands) forms ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'meheta enna'
  );

  const sinhalaText = page.locator('text=මෙහෙට එන්න');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මෙහෙට එන්න');
});

test('Pos_Fun_0022 - Convert sentence with currency value', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mata Rs.5343 oonee'
  );

  const sinhalaText = page.locator('text=මට Rs.5343 ඕනේ');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මට Rs.5343 ඕනේ');
}); 

test('Pos_Fun_0023 -  Negation patterns ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mama ehema karannee naehae'
  );

  const sinhalaText = page.locator('text=මම එහෙම කරන්නේ නැහැ');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මම එහෙම කරන්නේ නැහැ');
}); 

test('Pos_Fun_0024 -  Singular usage and pronoun variations ', async ({ page }) => {
  await page.goto('https://www.swifttranslator.com/', { timeout: 60000 });

  await page.fill(
    'textarea[placeholder="Input Your Singlish Text Here."]',
    'mama paadam karanna hadhanne'
  );

  const sinhalaText = page.locator('text=මම පාඩම් කරන්න හදන්නෙ');

  await expect(sinhalaText).toBeVisible({ timeout: 30000 });

  const output = await sinhalaText.innerText();

  expect(output).toContain('මම පාඩම් කරන්න හදන්නෙ');
});
