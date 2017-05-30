var header_page = function () {

    var menuBtn = element(by.css('i.material-icons')),
        featuresBtn = element.all(by.css('[ng-click="go(item.id); $event.stopPropagation();"]')).first();

    this.menuBtnClick = function () {
        menuBtn.click();
    };
    
    this.menuBtnCheck = function () {
        expect(menuBtn.isPresent()).toBeTruthy();
    };

    this.featuresBtnCheck = function () {
        expect(featuresBtn.isPresent()).toBeTruthy();
    };

    this.featuresBtnClick = function () {
        featuresBtn.click();
    };
};
module.exports = new header_page();
