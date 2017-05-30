var menu_page = function () {

    var pricingItem = element(by.cssContainingText('a.mdl-navigation__link', 'PRICING'));

    this.pricingItemClick = function () {
        pricingItem.click();
    }
};
module.exports = new menu_page();
