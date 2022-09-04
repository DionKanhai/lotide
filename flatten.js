// Import the functions from the sourced file
const assertArraysEqual = require("./assertArraysEqual");
const eqArrays = require("./eqArrays");

/* This function can be passed an array that can be nested or not, 
and return an array that it not nested */
function flatten(arrays) {
  //check if the user passed an array
  if (Array.isArray(arrays)) { 
    for (let i = 0; i < arrays.length; i++) {
      // remove nested arrays using the flat method 
      return arrays.flat(); 
     }
    }
  };

// Test code
const nestedArray = [1, 2, [3, 4], 5, [6]];
assertArraysEqual(flatten(nestedArray, [1, 2, [3, 4], 5, [6]])); // => arrays do not match

console.log(flatten([1, 2, [3, 4], 5, [6]]));
console.log(flatten([[10, 4], [34, 6], [92, 2]]));
console.log(flatten([1, 3, 3]));

let afterFlat = flatten(nestedArray);
console.log(afterFlat);
console.log(eqArrays([1, 2, 3, 4, 5, 6], afterFlat)); // => logs true
console.log(eqArrays([1, 2, [3, 4], 5, [6]], afterFlat)); // => logs false