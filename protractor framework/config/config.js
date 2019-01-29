'use strict';
var XLSX = require('xlsx');
const workbook = require('xlsx').readFile('../TestData.xlsx');
var sheetName = workbook.SheetNames[0];
var worksheet = workbook.Sheets[sheetName];
var name = worksheet['A2'];
var phone= worksheet['B2'];
var message= worksheet['C2'];
var email= worksheet['D2'];

const MAIN = {
    BASEAPIURL: 'https://www.ilabquality.com/',
    
}
const URL = {
    HOME: MAIN.BASEAPIURL,
    CAREERS: MAIN.BASEAPIURL + 'careers/',
    SOUTHAFRICA: MAIN.BASEAPIURL + 'careers/south-africa/',
};
const CONTENT = { 
    COUNTRYLINK: '',
    NAME:name,
    PHONE:phone,
    MESSAGE:message,
    EMAIL:email,
}
module.exports = {

    MAIN: MAIN,
    URL: URL,
    CONTENT: CONTENT
};
