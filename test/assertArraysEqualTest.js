//Imports the functions from the source file for test use
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

// Test code 
assertArraysEqual(eqArrays([2, 3, 4], [2, 3, 4]), true); //  logs match
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); // logs do not match
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 4]), false); // logs match
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), false); // logs do not match