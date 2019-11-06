// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  suites: {
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 400000
  },

  params: {
  
  },
  onPrepare : function() {
    browser.driver.manage().window().maximize();
  },
};
