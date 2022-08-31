// Imports the functions to run the tests
const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual');
const eqArrays = require('../eqArrays');

// Test code
console.log(middle([1, 3, 4, 5, 6])); // log 4
console.log(middle([1, 2, 4, 4])); // log 4, 2
console.log(middle([1, 2, 3])); // log 2
console.log(middle([1, 2])); // log empty array []
// assertion tests
assertArraysEqual(eqArrays(middle([1, 3, 4, 5, 6]), true)); // the arrays do not match
assertArraysEqual(eqArrays(middle([1, 3, 4, 5, 6]), false)); // the arrays do not match