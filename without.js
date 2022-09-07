// Imports files for testing purposes
const assertArraysEqual = require('./assertArraysEqual');

// This function will receive two arrays
// The second array will determine aa value to remove from the first array
// The function will remove that value and return a new array without the value
function without(source, itemsToRemove) {
  // take in the source array and use the filter method on each element in the array
  // if the element is not item to be removed return element
  return source.filter(element => !itemsToRemove.includes(element));
} 

// Test code
console.log(without([1, 2, 3], [1]));
console.log(without([4, 5], [4]));

assertArraysEqual(without([1, 2, 3], [1]));

module.exports = without;
