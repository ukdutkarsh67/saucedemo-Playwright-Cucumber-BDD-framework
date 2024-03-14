Feature: Swag Labs Functionality

  Scenario: Verify Adding Product to Cart
    Given User has opened Swag Labs on the browser
    When User enters valid username "<username>" and password "<password>"
    And User clicks the login button
    And User clicks the Add to Cart button on the inventory page
    And User clicks the cart icon on the inventory page
    Then User should see the added product on the cart page with the corresponding details

  Scenario: Verify Checkout Step One
    Given User has opened Swag Labs on the browser
    When User enters valid username "<username>" and password "<password>"
    And User clicks the login button
    And User has on the cart page
    And User fill all details
    Then User will be redirected to the checkout overview page

  Examples: 
      | username   | password     |
      | standard_user| secret_sauce|