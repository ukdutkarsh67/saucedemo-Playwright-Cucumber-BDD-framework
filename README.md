# saucedemo-Playwright-Cucumber-BDD-framework

This project contains automated tests for the Swag Labs e-commerce website using Cucumber.js and Playwright.

## Flow of the Code

The code follows a typical test automation framework structure, consisting of feature files, step definitions, page objects, and configuration files:

1. **Feature Files**: Located in the `src/test/features/` directory, feature files are written in Gherkin syntax and define the behavior of the tests in a human-readable format.

2. **Step Definitions**: Located in the `src/test/stepDefinitions/` directory, step definitions are written in TypeScript and define the actions to be taken for each step in the feature files. These step definitions interact with the page objects to perform actions on web pages.

3. **Page Objects**: Located in the `src/pageObjects/` directory, page objects encapsulate the elements and actions of the web pages under test. They provide a cleaner and more maintainable way to interact with web elements.

4. **Configuration Files**: The `cucumber.json` file located in the project root contains configuration options for Cucumber.js, such as paths to feature files, step definitions, and other options related to test execution.

## Prerequisites

Before running the tests, ensure you have the following installed:

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository to your local machine:
   git clone https://github.com/your-username/swag-labs-test-automation.git

2. Install dependencies:
   cd swag-labs-test-automation
   npm install


## Running Tests

To run the tests, use the following command:
   npm test

This command will execute the Cucumber.js tests using Playwright for browser automation. Ensure that the feature files are located in the `src/test/features/` directory and the step definitions are located in the `src/test/stepDefinitions/` directory.

## Configuration

You can configure test execution options in the `cucumber.json` file located in the project root. Modify the paths to feature files, step definitions, and other options as needed.

## Project Structure

- **src/test/features**: Contains feature files written in Gherkin syntax.
- **src/test/stepDefinitions**: Contains step definitions written in TypeScript.
- **src/pageObjects**: Contains page objects for interacting with web pages.
- **cucumber.json**: Configuration file for Cucumber.js.

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request.

## Conclusion

This test automation project provides a robust framework for testing the Swag Labs e-commerce website. By leveraging Cucumber.js for behavior-driven development and Playwright for browser automation, it offers an efficient and maintainable approach to writing and executing automated tests. Whether you're a developer, tester, or contributor, you can easily extend and enhance the test suite to meet your testing needs.
