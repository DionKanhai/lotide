// Function that asserts if two arrays match or not
const assertArraysEqual = function(array1, array2) {
  // check if arrays match
  if (array1 === array2) {
    console.log(`The Arrays match!`);
  } else if (array1 !== array2) {
    console.log(`The Arrays do not match!`);
  }
};

// Enable this function to be exported to other files
module.exports = assertArraysEqual;