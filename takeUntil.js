// Imports files needed to test the function
const assertArraysEqual = require('./assertArraysEqual');

// This function take Until will be passed an array and a callback function
// The function will use the callback condition to return values into a new array that pass the callback function condition
const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
  // calls the callback function and checks if the item in the input array 
  // does not pass the callback if condition, if it does
  // then push item to results array
  if (callback(item)) {
    return results;
  }
    results.push(item);
  }
  return results;
};

// Test code
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, value => value < 0);
console.log(results1);
console.log(assertArraysEqual(data1, results1));