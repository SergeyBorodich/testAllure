"use strict";

var header_page = require('../PageObjects/Header_page.js'),
    menu_page = require('../PageObjects/menu_page.js');

describe ('Проверка элементов страницы', function() {

    beforeAll(function(){
        browser.get('https://stage.operationsxchange.com');
        browser.waitForAngular();
    });

    it('Проверить наличие кнопки Меню и нажать на нее', function() {
        header_page.menuBtnCheck();
        header_page.menuBtnClick();
    });

    it('В меню нажать на "Pricing"', function() {
        menu_page.pricingItemClick();
    });

    it('Проверить наличие кнопки "Features" и нажать на нее', function () {
        header_page.featuresBtnCheck();
        header_page.featuresBtnClick();
    });
});
