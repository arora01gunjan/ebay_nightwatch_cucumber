module.exports = function (browser) {
    this.enterTextIntoSearchInputField = function(text) {
        let searchInputTextField = '#gh-ac'
        browser
            .waitForElementVisible(searchInputTextField,5000)
            .click(searchInputTextField)
            .setValue(searchInputTextField,text)
        return browser
    };

    this.clickSearchButton = function() {
        let searchButton = '#gh-btn'
        browser
            .waitForElementVisible(searchButton,5000)
            .click(searchButton)
        return browser
    };
};