module.exports = function (browser) {
    this.addToCart = function() {
        let addToCartButton='#atcRedesignId_btn'
        browser
            .waitForElementVisible(addToCartButton,5000)
            .click(addToCartButton)
        return browser
    };

    this.closeDialogBoxIfNotCheckingOut =function() {
        let closeDialogBox ='div.clzBtn.viicon-close'
        browser
            .waitForElementVisible(closeDialogBox,5000)
            .click(closeDialogBox)    
        return browser
    };
}