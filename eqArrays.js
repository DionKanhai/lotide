// Function that asserts if two arrays are equal or not
const eqArrays = function(array1, array2) {
  // first check if array length are equal
  if (array1.length !== array2.length) {
    return false;
  }
  // loops through array1
  for (let i = 0; i < array1.length; i++) {
    // checks if array 1 indexes match array2 indexes
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

// enables the function to be exported to other files
module.exports = eqArrays;