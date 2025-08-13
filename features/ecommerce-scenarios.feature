Feature: Comprehensive E-commerce Testing
  As a user of the automation test store
  I want to perform various shopping scenarios
  So that I can verify the complete e-commerce functionality

  Background:
    Given the user is logged in to the website
    And the user is on the home page

  @scenario1 @complete-flow
  Scenario: Complete E-commerce Flow
    When the user selects Dove brand from the brands carousel
    And the user adds the newest item to cart
    Then the item should be in the cart

  @scenario2 @apparel-shopping
  Scenario: T-shirts and Shoes Shopping Flow
    When the user navigates to the apparel section
    And the user goes to T-shirts section
    And the user sorts T-shirts by low to high price
    And the user selects the lowest value T-shirt
    And the user goes to shoes section
    And the user adds the highest value shoe to cart with quantity 2
    Then the cart should contain the selected items

  @scenario3 @skincare-testing
  Scenario: Skincare Section Testing
    When the user navigates to the skincare section
    And the user counts sale and out of stock items
    And the user adds available sale items to cart
    Then the sale items should be in the cart

  @scenario4 @men-section
  Scenario: Men Section Testing
    When the user navigates to the men section
    And the user finds a product ending with M
    And the user adds the product to cart if available
    Then the product should be in the cart or all products should be out of stock
