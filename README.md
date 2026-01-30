# IT3040 - Information Technology Project Management (ITPM)
## Assignment 01: Automated Testing with Playwright

**Student Name:** Mayadunna H H  
**Registration Number:** IT23212718  
**Target System:** [SwiftTranslator](https://www.swifttranslator.com/) (Singlish to Sinhala)

---

## Project Overview
This project involves automated functional and UI testing for a real-world system. The goal is to evaluate the accuracy of Singlish to Sinhala transliteration across various sentence structures, grammatical forms, and informal language.

Tests were developed using **Playwright** and automated against 35 scenarios identified in the provided test case Excel sheet.

---

## Prerequisites
Before running the tests, ensure you have the following installed on your machine:
* **Node.js** (LTS version recommended)
* **npm** (Node Package Manager)

---

## Installation Instructions 

1. **Extract the Files**: Unzip the folder `IT23212718.zip`.
2. **Open Terminal**: Navigate to the project root directory where `package.json` is located.
3. **Install Dependencies**: Run the following command to install the required Playwright packages:
   ```bash
   npm install
4. **Install Chromium Browser**: Install the necessary browser binaries for Playwright:
   ```bash
   npx playwright install chromium

---
## Running the Tests
The test suite is designed to be executed specifically using the Chromium browser engine.

   **Run All Scenarios**
   To execute the full suite of 35 scenarios in the background:
   ```bash
    npx playwright test IT23212718.js --project=chromium
   ```

  **Run Tests in Headed Mode (Visual)**
  To watch the automation interact with the website in real-time:
  ```bash
  npx playwright test IT23212718.js --project=chromium --headed
  ```

  **View Results and Reports**
  To view the detailed HTML test report generated after execution:
  ```bash
  npx playwright show-report
  ```
