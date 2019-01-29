'use strict';
const CONFIG = require('../../config/config');
const EC = protractor.ExpectedConditions;
const util = require('../../utilities/util');

let adduser = () => {

    it(' Navigate to Careers', function () {
        util.waitFor('.btn-link');
        util.waitFor('.smart-table-header-row');        
    });

    it(' Open Open South African link', function () {
        util.clickElement('.btn-link');
        util.textAssert('h3',CONFIG.CONTENT.HEADER);        
    });
    it(' add user data', function () {
        browser.get(CONFIG.URL.ADDSME);
        util.clearAndEnterData('input[name="applicant_name"]',CONFIG.CONTENT.NAME);
        util.clearAndEnterData('input[name="email"]',CONFIG.CONTENT.EMAIL);
        util.clearAndEnterData('input[name="phone"]',CONFIG.CONTENT.PHONE);
        util.clearAndEnterData('input[name="message"]',CONFIG.CONTENT.MESSAGE);

        util.clearAndEnterData('#wpjb-upload-browse-file','../../TestData.xlsx');
        util.waitForAndClick('#wpjb_submit');        
               
    });
};

module.exports = {
  run: adduser
};