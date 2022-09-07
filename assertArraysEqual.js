// Imports the file to be used in the function
const eqArrays = require('./eqArrays');

// Function that is passed in an two arrays and outputs an assertion message if the two arrays match or not
const assertArraysEqual = function(array1, array2) {
  // check if arrays match and if they do logs the message
    if (!eqArrays(array1, array2)) {
    console.log('The Arrays do not match!');
    
    // checks if two do not match and logs the message
}
  else {
    console.log('The Arrays match!')
  }
  }

// Enable this function to be exported to other files
module.exports = assertArraysEqual;
