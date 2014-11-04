exports.config = {

  // framework: 'mocha',
    
  // The address of a running selenium server.
  seleniumAddress: 'http://localhost:4444/wd/hub',

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:3000',
  
  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['./src/client/test/e2e-test/*.spec.js']
  
};