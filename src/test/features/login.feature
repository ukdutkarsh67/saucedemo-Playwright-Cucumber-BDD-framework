Feature: Swag Labs Functionality

  Scenario: Verify Valid Swag Labs Login
    Given User has opened Swag Labs on the browser
    When User enters valid username and password
    And User clicks the login button
    Then Swag Labs title should be displayed at the top of the page

  Scenario: Verify Invalid Swag Labs Login
    Given User has opened Swag Labs on the browser
    When User enters invalid username and password
    And User clicks the login button
    Then "Epic sad face: Sorry, this user has been locked out" message should be displayed

  Scenario: Verify Problem Swag Labs Login
    Given User has opened Swag Labs on the browser
    When User enters valid username and password
    And User clicks the login button
    Then the image should not show up
