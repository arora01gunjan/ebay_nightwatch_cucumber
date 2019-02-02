Feature: Ebay Page
	To establish that User can access Ebay
	As a user, I want to go to Ebay page and check if I can find Search Button

	Scenario: Verify Search Button
		Given I open the Ebay page
		And the title is "Electronics, Cars, Fashion, Collectibles, Coupons and More | eBay"
		And the Search button exists
		When I click the Search text field and enter "Java book"
		Then I click the Search button
		And I click the first result
		And I click Add to Cart button
		And I close the checkout dialog box
		Then I click the Search text field and enter "harry potter book"
		And I click the Search button
		And I click the first result
		And I click Add to Cart button
		Then I verify the checkout page that the title is "Checkout"
		And I verify that the 2 items added exists on checkout page
