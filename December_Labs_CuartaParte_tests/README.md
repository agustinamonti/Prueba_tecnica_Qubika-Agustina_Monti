## December Labs - Automated test cases

This repository contains test cases to validate the functionality of the December Labs website's "Get in touch" form using Nightwatch.js.

## Solution Explanation

The test suite consists of the following test cases:

1. Validate that the "Get in touch" form opens: This test case navigates to the December Labs website, maximizes the window, clicks on the "Get in touch" menu item, and asserts that the form titled "Get In Touch" is visible.

2. Validate that required fields are displayed in red when the empty form is submitted: This test case asserts that the submit button is visible, clicks on the submit button without entering any data, and asserts that the required fields are displayed in red by checking the border color property.

3. Complete the required fields and validate that once they are filled, they are no longer marked in red: This test case asserts that the required fields are initially displayed in red, fills in the required fields with valid data, and asserts that the fields are no longer marked in red.

## Improvements

Some possible improvements for the test suite included:

Implementations of best practices to improve the code: These tests are developed with the aim of fulfilling the requirements stated in the challenge sent by December Labs. It is likely that improvements could be implemented if more time is dedicated to researching the best practices for automated testing using the NightWatch.js framework.

Modularizing test code: As the test suite grows, it is recommended to modularize the test code into separate files or modules to improve code organization, maintainability, and reusability.

Adding assertions for additional form validation: Currently, the test suite focuses on the visual validation of the form fields. However, additional assertions can be added to validate form submission, success messages, or any other form validation scenarios.

## Steps for Test Execution

To execute the tests in this test suite, follow these steps:

Clone this repository to your local machine.

Ensure that you have Node.js and NPM (Node Package Manager) installed.

Open a terminal and navigate to the project's root directory.

Install the project dependencies by running the following command: npm install

Update the Nightwatch configuration file (nightwatch.conf.js) with the appropriate settings for your testing environment (e.g., browser, WebDriver, etc.).

Run the tests using the following command:
npx nightwatch ./tests/CuartaParte-Automation.js

This will execute the test suite and display the test results in the terminal.

Note: Make sure that the December Labs website is accessible and in the expected state during the test execution.
Review the test results to see if the tests passed or if any failures occurred.

## Conclusion

This test suite provides automated tests to validate the functionality and visual aspects of the "Get in touch" form on the December Labs website. By executing these tests, you can ensure that the required fields are correctly validated, displayed in red when empty, and no longer marked in red once they are filled. The suggested improvements aim to enhance the test suite's coverage, maintainability, and flexibility.