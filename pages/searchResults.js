module.exports = function (browser) {
    this.clickFirstResult = function() {
        let firstResult = '#srp-river-results-listing1 a.s-item__link'
        browser
            .waitForElementVisible(firstResult,8000)
            .click(firstResult)
            .waitForElementVisible('#itemTitle',8000)
        return browser
    };

}