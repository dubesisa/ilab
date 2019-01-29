'use strict';

const path = require('path');
const EC = protractor.ExpectedConditions;

function eventual(expectedCondition, timeout) {
  return browser.wait(expectedCondition, timeout || 35000).then(function () {
    return true;
  }, function () {
    return false;
  });
};



var waitFor = (identifier) => {
  expect(eventual(EC.presenceOf(element(by.css(identifier))))).toBe(true);
  expect(eventual(EC.elementToBeClickable(element(by.css(identifier))))).toBe(true);
};

var waitForAndClick = (identifier) => {
  expect(eventual(EC.presenceOf(element(by.css(identifier))))).toBe(true);
  expect(eventual(EC.elementToBeClickable(element(by.css(identifier))))).toBe(true);
  element(by.css(identifier)).click();
};

var clearAndEnterData = (identifier, text) => {
  element(by.css(identifier)).clear();
  element(by.css(identifier)).sendKeys(text);
};

var textAssert = (identifier, text) => {
  expect(eventual(EC.presenceOf(element(by.cssContainingText(identifier, text))))).toBe(true);
};
var Enabled = (identifier) => {
  expect(element(by.css(identifier)).isEnabled()).toBe(true);
};
var clickElement = (identifier) => {
  expect(eventual(EC.presenceOf(element(by.css(identifier))))).toBe(true);
  element(by.css(identifier)).click();
};

var textAssertClick = (Elementidentifier, text) => {
  expect(eventual(EC.presenceOf(element(by.cssContainingText(Elementidentifier, text))))).toBe(true);
  element(by.cssContainingText(Elementidentifier, text)).click();
};



module.exports = {
  textAssertClick:textAssertClick,
  Enabled: Enabled,
  clickElement: clickElement,
  eventual: eventual,
  clearAndEnterData: clearAndEnterData,
  waitFor: waitFor,
  waitForAndClick: waitForAndClick,
  textAssert: textAssert,
};

