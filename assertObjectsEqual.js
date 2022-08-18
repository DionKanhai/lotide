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

// FUNCTION IMPLEMENTATION
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
// test code 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);