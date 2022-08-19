// checks if two arrays are equal or not
function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
// asserts if two arrays are equal or not
const assertArraysEqual = function (array1, array2) {
  if (array1 === array2) {
    console.log(`The Arrays match!`);
  } else if (array1 !== array2) {
    console.log(`The Arrays do not match!`);
  }
};

// map function
const words = ["ground", "control", "to", "major", "tom"];

const maps = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};



const results1 = maps(words, word => word[0]);
console.log(results1)

// test code
assertArraysEqual(maps(words, word => word[0])); // prints out the arrays do not match