exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {'browserName': 'chrome'},
    specs: ['Specs/operationsxchange_spec.js'],
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
            resultsDir: 'allure-results'
        }));
        browser.driver.manage().window().maximize();
    }
};