## December Labs Austin Office - Automated test cases

This repository contains test suites to validate the functionality of the December Labs website's Austin office page using Cypress.

## Solution Explanation

The test suite consists of the following test cases:

1. Validate that the website opens correctly: This test case visits the December Labs website and asserts that specific elements, such as headings and menu items, are present and have the expected text content.

2. Access the Austin office page: This test case visits the December Labs website, clicks on the Austin office link, and asserts that the page title and URL match the expected values.

3. Validate that the "Schedule free consultation" popup is displayed: This test case visits the December Labs website, clicks on the Austin office link, clicks on a button to open the consultation popup, and asserts that the popup iframe is visible. It also asserts the presence of specific text content within the iframe and closes the popup.

4. Validate that the "Schedule free consultation" popup is no longer displayed: This test case follows the same steps as the previous test case to open the popup, but instead of closing it, it asserts that the iframe is not visible.

## Improvements

Some possible improvements for the test suite include:

Using page objects: Instead of directly interacting with the elements using CSS selectors, consider implementing page objects to abstract the interaction logic and improve code reusability and maintainability. One example of this is the implementation of the navigate function in the tests. 

Organizing test code: As the test suite grows, it is recommended to organize the test code into separate files or modules based on the features or areas being tested. This improves code organization and allows for easier maintenance and scalability.

## Steps for Test Execution

To execute the tests in this test suite, follow these steps:

1. Clone this repository to your local machine.

2. Ensure that you have Node.js and NPM (Node Package Manager) installed.

3. Open a terminal and navigate to the project's root directory.

4. Install the project dependencies by running the following command:

npm install
 
Update the Cypress configuration file (cypress.json) with the appropriate settings for your testing environment (e.g., browser, test timeout, etc.).

Run the tests using the following command: npx cypress open

This will open the Cypress Test Runner, where you can select the test suite or specific test cases to run.

Click on a test case to run it, and observe the test execution in the Cypress Test Runner. You can view the test results, logs, and any error messages.

## Conclusion

This test suite provides automated tests to validate the functionality and behavior of the December Labs website's Austin office page. By executing these tests, you can ensure that the website opens correctly, the navigation to the Austin office page works as expected, and the "Schedule free consultation" popup is displayed and closed correctly. The suggested improvements aim to enhance the test suite's coverage, maintainability, and flexibility.