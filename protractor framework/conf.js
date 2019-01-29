
exports.config = {
  chromeOnly: true,
  // directConnect: true,
  framework: 'jasmine',
  framework: 'jasmine2',
  capabilities: {
    'browserName': 'chrome',
    'platform': 'ANY',
    'version': 'ANY',
    shardTestFiles: true,
    maxInstances: 1,
    'chromeOptions': {
      args: ['--no-sandbox', '--test-type=browser']

    },
  },
onPrepare: function() {
    var jasmineReporters = require('jasmine-reporters').
    jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
        consolidateAll: true,
        savePath: 'testresults',
        filePrefix: 'xmloutput'
    }));
},
  jasmineNodeOpts: {
    defaultTimeoutInterval: 350000
  },
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['index.js'],
};


