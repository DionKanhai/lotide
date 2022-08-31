// Project Lotide index of all the utility functions

// Import all the utility files from the Lotide directory using require method
const head = require('./head'); // returns a new array with the first element from an input array 
const tail = require('./tail'); // returns a new array that includes all elements but the first element from an input array 
const middle = require('./middle'); // returns a new array with the middle elements from an input array
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
  head: head,
  tail: tail,
  middle: middle,
  assertArraysEqual: assertArraysEqual,
  assertEqual: assertEqual,
  countLetters: countLetters,
  countOnly: countOnly,
  eqArrays: eqArrays,
  eqObjects: eqObjects,
  findKey: findKey,
  findKeyByValue: findKeyByValue, 
  flatten: flatten,
  letterPositions: letterPositions, 
  map: map,
  takeUntil: takeUntil, 
  without: without
};