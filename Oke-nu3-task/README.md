# Project Name

# Description

This project contains automated tests for the login functionality of nu3 web application

# Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Install Cypress locally as a dev dependency by running the following command:
   `bash'
   npm install cypress --save-dev

# Running the Tests

- To run the automated tests, use the following command:
- npx cypress open --e2e --browser chrome
- To run in terminal,
- npm test

# Placeholder Test Scenarios

## Test Description: Validate Placeholder Text

### Purpose: Verifies if the placeholder text of the email and password input fields matches the expected value.

##### Steps:

- Grab the css selector and assert the attribute
- Expected Outcome: Expects selector should have expected attribute.

# Login Positive Test Scenarios

## Test Description: Successful Login

### Purpose: Verifies if a valid user can login with valid credentials.

#### Steps:

- Enters an valid email address.
- Enters a valid password.
- Submits the login form.
- Expected Outcome: Expects User should be successfully logged in and navigated to the User account screen.

# Login Negative Test Scenarios

## Test Description: Invalid Email

### Purpose: Verifies if a user cannot login with an invalid email address.

#### Steps:

- Enters an invalid email address.
- Enters a valid password.
- Submits the login form.
- Expected Outcome: Expects to see an error message indicating that the email or password is incorrect.

# Test Description: Invalid Password

## Purpose: Verifies if a user cannot login with an invalid password.

### Steps:

- Enters a valid email address.
- Enters an invalid password.
- Submits the login form.
- Expected Outcome: Expects to see an error message indicating that the email or password is incorrect.

# Local Storage Validation.

## Test Description: Validating Local Storage After Login

### Purpose: Verifies if the local storage is updated correctly after a successful login.

#### Steps:

- Logs in with valid credentials.
- Retrieves session data from local storage.
- Expected Outcome: Expects the session ID to exist in the local storage.

# Test Description: Update Session on Activity

## Purpose: Verifies if the session is updated after user activity.

### Steps:

- Logs in with valid credentials.
- Reloads the page.
- Visits the account page.
- Expected Outcome: Expects the session state to be updated.

# Test Description: Consistency of Session Information

## Purpose: Verifies if the session information remains consistent.

### Steps:

- Logs in with valid credentials.
- Checks for the presence of session ID.
- Expected Outcome: Expects the session information to be consistent.

# Good Practices

- Setup Tasks: Use of beforeEach hook to ensure setup tasks are executed automatically before each test case.
- Descriptive Test Cases: Each test case is described in detail to provide clarity on its purpose and expected outcome.
- Structured Test Organization: Use of it blocks to structure and describe individual test cases.
- Assertions with Chai: Utilize Chai assertions for verifying expected outcomes.
