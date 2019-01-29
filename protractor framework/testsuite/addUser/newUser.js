'use strict';
const addurlTest = require('../../tests/addUser/addURLTest');
const addUserTest = require('../../tests/addUser/addUserTest');


var addTest = () => {
    describe('Open URL Tests', addurlTest.open);
    describe('Add User Tests', addUserTest.run);
}

module.exports = {
    run: addTest
}

