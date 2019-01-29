'use strict';

const CONFIG = require('../../config/config');

let startBrowser = () => {
    it('should launch site', function () {
        var openBrowser = function () {
            browser.get(CONFIG.URL.HOME);
        };
        browser.controlFlow().execute(openBrowser);
        browser.manage().window().maximize();
    });
};


module.exports = {
  open: startBrowser
};