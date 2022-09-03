// imports the function from the sourced file 
const eqArrays = require('./eqArrays');

// This function will be passed two objects in and will return an assertion statement 
// that will output if the objects are equal or not
const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect; // imports library so our function can use it
  const failure = `Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`
 // checks the object lengths, if they are not equal then log fail
  let objectOneKeys = Object.keys(object1)
  let objectTwoKeys = Object.keys(object2)
  if (objectOneKeys.length !== objectTwoKeys.length) {
    console.log(failure)
    return false;
  }
  // loops through keys of object, compares the arrays in the keys using
  // eqArrays, passing the objects to eqArrays as arguments and if they are not equal log fail
  for (const keys in object1) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      const resultsArrayComparison = eqArrays(object1[keys], object2[keys])
      if (!resultsArrayComparison) {
        console.log(failure)
        return false;
      }
    } 
    // if object keys do not match then return fail
    else if (object1[keys] !== object2[keys]) {
      console.log(failure)
      return false;
    } 
  }
  console.log(`Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`)
};

// Enable this function to be exported to other files
module.exports = assertObjectsEqual;