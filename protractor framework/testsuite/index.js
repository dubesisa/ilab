'use strict';
const addnewuser = require('./addUser/newUser');

var testSuite = () => {
    addnewuser.run(); 
    

}

module.exports = {
    run: testSuite
}
