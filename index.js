// Project Lotide index of all the utility functions

// Import all the utility files from the Lotide directory using require method
const head = require('./head'); 
const tail = require('./tail'); 
const middle = require('./middle'); 
const assertArraysEqual = require('./assertArraysEqual'); 
const assertEqual = require('./assertEqual');
const countLetters = require('./countLetters');
const countOnly = require('./countOnly');
const eqArrays = require('./eqArrays');
const eqObjects = require('./eqObjects');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

// Exporting all utility functions as an object
// Object that contains all of the utility functions as key value pairs
module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue, 
  flatten,
  letterPositions, 
  map,
  takeUntil,
  without
};