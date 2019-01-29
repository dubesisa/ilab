const suite = require('./testsuite/index.js');

browser.ignoreSynchronization = true;

suite.run();

afterAll(function () {
   browser.close();
});