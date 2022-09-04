// Import files that will test the function
const assertArraysEqual = require('./assertArraysEqual');

/*This map function accepts an array and a callback function as a parameter. It 
will appy the callback function to each element of the array, and then return a 
new array based on the condition of the callback function
*/

const maps = function(array, callback) {
  const results = [];
  // loop through the input array
  for (let item of array) {
    //push the items in the array to the new array based on the callback condition
    results.push(callback(item)); 
  }
  return results;
};

//Test code
const words = ["ground", "control", "to", "major", "tom"];
const results1 = maps(words, word => word[0]);
console.log(results1)
const results2 = ["g", "c", "t", "m", "t"]

// test code
assertArraysEqual(maps(words, word => word[0])); // prints out the arrays do not match
assertArraysEqual(maps(results1, results2));