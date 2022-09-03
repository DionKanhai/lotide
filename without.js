// Imports files for testing purposes
const assertArraysEqual = require('./assertArraysEqual');

// This function will receive two arrays
// The second array will determine aa value to remove from the first array
// The function will remove that value and return a new array without the value
function without(source, itemsToRemove) {
  // loop through the source array
  for (let i = 0; i < itemsToRemove.length; i++) {
    // store the value to be removed in a variable
    const remove = source.includes(itemsToRemove[i])
    // if vale is found in array splice it and return new array
    if (remove) {
      source.splice(i, 1)
    }
  }
  return source;
};

// Test code
console.log(without([1, 2, 3], [1]));
console.log(without([4, 5], [4]));

assertArraysEqual(without([1, 2, 3], [1]));

