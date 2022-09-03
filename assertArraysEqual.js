// Function that is passed in an two arrays and outputs an assertion message if the two arrays match or not
const assertArraysEqual = function(array1, array2) {
  // check if arrays match and if they do logs the message
  if (array1 === array2) {
    console.log(`The Arrays match!`);
    // checks if two do not match and logs the message
  } else if (array1 !== array2) {
    console.log(`The Arrays do not match!`);
  }
};

// Enable this function to be exported to other files
module.exports = assertArraysEqual;