//Imports the functions from the source file for test use
const assertArraysEqual = require('../assertArraysEqual');

// Test code 
assertArraysEqual([2, 3, 4], [2, 3, 4]); //  logs match
assertArraysEqual([1, 2, 3], [1, 2, 4]); // logs does not match
assertArraysEqual([1, 2, 3], [1, 2, 4]); // logs does not match
assertArraysEqual([1, 2, 3], [1, 2, 3]); // logs do match
