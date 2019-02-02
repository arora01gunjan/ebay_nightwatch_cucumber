module.exports = function (browser) {
    this.verifyCheckoutPage =function(text) {
        let checkoutButton = 'div.app-atc-layer__actionRow>a.btn-prim.vi-VR-btnWdth-XL>span'
        let checkoutAsGuestButton='#gtChk'
        browser
            .waitForElementVisible(checkoutButton,5000)
            .click(checkoutButton)
            .waitForElementVisible(checkoutAsGuestButton,5000)
            .click(checkoutAsGuestButton)
        browser.assert.title(text)
        return browser
    };

    this.verifyItemsOnCheckoutPage =function() {
        browser
            .waitForElementVisible('#cart-details-ctr>#s_0', 5000)
            .waitForElementVisible('#cart-details-ctr>#s_1', 5000)
        return browser
    };
}