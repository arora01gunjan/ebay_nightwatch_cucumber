const {client} = require('nightwatch-cucumber');
const {Given, Then, When} = require('cucumber');
const homepage = require('../pages/homepage.js')
const searchResults = require('../pages/searchresults.js')
const itemDetail = require('../pages/itemDetail.js')
const checkout = require('../pages/checkout.js')


Given(/^I open the Ebay page$/, () => {
  return client
    .url('https://www.ebay.com.au/');
});

Then(/^the title is "([^"]*)"$/, (text) => {
  return client.assert.title(text);
});

Then(/^the Search button exists$/, () => {
  return client.assert.visible('#gh-btn');
}); 

When(/^I click the Search text field and enter "([^"]*)"$/, (text) => {
    return client
      .page.homepage().enterTextIntoSearchInputField(text)
  });
  
Then(/^I click the Search button$/, () => {
    return client
      .page.homepage().clickSearchButton()
  });
  
Then(/^I click the first result$/, () => {
    return client
      .page.searchResults().clickFirstResult()
  });

Then(/^I click Add to Cart button$/, () => {
  return client
    .page.itemDetail().addToCart()
});

Then(/^I close the checkout dialog box$/, () => {
  return client
    .page.itemDetail().closeDialogBoxIfNotCheckingOut()
});

Then(/^I verify the checkout page that the title is "([^"]*)"$/, (text) => {
  return client
    .page.checkout().verifyCheckoutPage(text)
});

Then(/^I verify that the 2 items added exists on checkout page$/, () => {
  return client
    .page.checkout().verifyItemsOnCheckoutPage()
});
