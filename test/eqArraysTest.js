// imports the function from the sourced file
const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

// Test code
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // logs pass
assertEqual(eqArrays([1, 2, 3], [1, 2, 4]), true); // logs failed

console.log(eqArrays([1, 2, 3], [1, 2, 4])); // returns false
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // returns true
