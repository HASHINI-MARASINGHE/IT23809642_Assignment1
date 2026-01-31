
# Singlish to Sinhala Translator Testing Project

## 📋 Project Overview
This project contains automated test cases for the Singlish to Sinhala Translator website (https://www.swifttranslator.com/). The tests are designed to evaluate the system's accuracy in converting Singlish input to Sinhala output and assess the stability and usability of the user interface under various conditions.

## 🎯 Assignment Requirements
This project fulfills the requirements for IT3040 - ITPM Assignment 1 (Year 3, Semester 1) of the BSc (Hons) in Information Technology program.

## Requirements Met:
 - 25 Positive Functional Test Cases

 - 10 Negative Functional Test Cases 

 - 1 Positive UI Test Case

 - Complete Playwright automation scripts


## 🛠️ Prerequisites
Before running the tests, ensure you have the following installed:

- Node.js (version 14 or higher)

Download from: https://nodejs.org/

 Verify installation:
  ```bash
  node --version
```
  

- Git (for cloning the repository)

Download from: https://git-scm.com/

Verify installation: 
``` bash
git --version
```

## 📥 Installation
Step 1: Clone or Download the Project


# Clone the repository (if using Git)
```bash
git clone <repository-url>
cd IT23809642
```

# OR download and extract the ZIP file
# Navigate to the project directory

```bash
cd IT23809642
```
Step 2: Install Dependencies


# Install Node.js dependencies
```bash
npm install
```
Step 3: Install Playwright Browsers

# Install required browsers (Chromium)
```bash
npx playwright install chromium
```

# 🚀 Running the Tests
Option 1: Run All Tests

# Run all test cases (positive, negative, and UI)
```bash
npx playwright test --project=chromium $ --headed

```
Option 2: Run Specific Test Suites

# Run only positive test cases
```bash
npx playwright test translator-positive.spec.js --project=chromium $ --headed

```

# Run only negative test cases
```bash
npx playwright test translator-negative.spec.js --project=chromium $ --headed

```

# Run only UI test cases
```bash
npm run test:ui
```
Option 3: Run with UI Mode

# Run tests without opening browser windows
```bash
npx playwright test --headed false
```

# 📊 Test Report
- Viewing Test Results
After test execution, the HTML report will automatically open in your default browser. If it doesn't, you can manually open it:


# Generate and open the test report
```bash
npx playwright show-report
```
The report includes:

- Test execution status (Pass/Fail)

- Execution time for each test

- Detailed error logs

# Report Location
The HTML report is generated in the playwright-report folder.

## 📝 Test Case Details

 # Positive Test Cases (25)
These test cases verify that the system correctly converts valid Singlish inputs to Sinhala outputs:

1. Pos_Fun_0001:  Simple sentences ,Proper spacing 

2. Pos_Fun_0002: Greetings, punctuation marks with Request

3. Pos_Fun_0003: Convert Dates

4. Pos_Fun_0004: Responses 

5. Pos_Fun_0005: Paragraph-style input (/long) 

6. Pos_Fun_0006: Tense variations (past)

7. Pos_Fun_0007: Time formats, Proper spacing 

8. Pos_Fun_0008: Polite phrasing with punctuation marks

9. Pos_Fun_0009:  Compound sentences (two ideas joined) 

10. Pos_Fun_0010: English abbreviations and short forms 

11. Pos_Fun_0011: Plural noun usage

12. Pos_Fun_0012: Repeated word expressions used for emphasis 

13. Pos_Fun_0013: Present tense with location

14. Pos_Fun_0014: Informal phrasing 

15. Pos_Fun_0015: Convert dates

16. Pos_Fun_0016: Day-to-day expression

17. Pos_Fun_0017: Units of measurements 

18. Pos_Fun_0018: Positive forms 

19. Pos_Fun_0019: Compound sentences (two ideas joined) 

20. Pos_Fun_0020: Translate sentence with pronoun variation

21. Pos_Fun_0021: Imperative (commands) forms 

22. Pos_Fun_0022: Convert sentence with currency value

23. Pos_Fun_0023: Negation patterns 

24. Pos_Fun_0024: Singular usage and pronoun variations 



# Negative Test Cases (10)
These test cases verify that the system handles invalid or edge-case inputs appropriately:

1. Neg_Fun_0001: Inputs containing punctuation marks 

2. Neg_Fun_0002: Random characters

3. Neg_Fun_0003: Tense variations (past)

4. Neg_Fun_0004: Handle heavy spelling errors

5. Neg_Fun_0005: Numbers 

6. Neg_Fun_0006: Multi-word expressions

7. Neg_Fun_0007: Sentences containing places and common English words that should remain as they are 

8. Neg_Fun_0008: Missing spaces / joined words

9. Neg_Fun_0009: Multiple spaces in Singlish input

10. Neg_Fun_0010: Convert interrogative sentence with spelling ambiguity

# Positive UI Test Cases (4)
1. Pos_UI_0001: Tense variations (future) 
2. Pos_UI_0002: Tense variations (future) 
3. Pos_UI_0003: Paste medium text input, Time formats, and  Sentences containing places and                   common English words that should remain as they are
4. Pos_UI_0004: Negative sentence forms 

# Negative UI Test Cases (4)
1. Neg_UI_0001: No UI guidance showing Singlish-to-Sinhala letter mappings
2. Neg_UI_0002: Verify Clear button functionality
3. Neg_UI_0003: Verify behavior on empty input submission

## 🔧 Configuration
- Playwright Configuration
The playwright.config.js file contains the following settings:

- Test Directory: ./tests

- Timeout: 60 seconds per test

- Reporters: HTML and console output

- Browsers: Chromium

## ⚠️ Troubleshooting
Common Issues
- Tests fail with timeout errors

- Ensure you have a stable internet connection

- Increase timeout in playwright.config.js if needed

- Check if the website (https://www.swifttranslator.com/) is accessible

- Playwright browsers not installed

Run:
```bash
npx playwright install chromium
```

Node.js/npm not found

Verify Node.js installation: 
```bash
node --version
```

Verify npm installation: 
```bash
npm --version
```

# Verify all components are installed correctly
node --version
npm --version
npx playwright --version
npx playwright install --dry-run

## Additional Information
Test Case ID Convention
- Pos_Fun: Positive functional test

- Neg_Fun: Negative functional test

- Pos_UI: Positive UI test

- Neg_UI: Negative UI test

# 📄 License
This project is created for educational purposes as part of the BSc (Hons) in Information Technology program at the SLIIT.

# 👨‍💻 Developer Information
- Registration Number: IT23809642

- Module: IT3040 - IT Project Management

- Assignment: Assignment 1
