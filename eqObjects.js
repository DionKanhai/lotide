// Imports the functions needed to help run eqObjects
const eqArrays = require('./eqArrays');

// This funnction is passed two objects, and will return true if both objects have identical keys with identical values,
// otherwise it returns false
const eqObjects = function(object1, object2) {
  let objectOneKeys = Object.keys(object1)
  let objectTwoKeys = Object.keys(object2)
  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  } 
  // loops through keys of object, compares the arrays in the keys using
  // eqArrays, passing the objects to eqArrays as arguments and if they are not equal log fail
  for (const keys in object1) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      const resultsArrayComparison = eqArrays(object1[keys], object2[keys])
      if (!resultsArrayComparison) {
        return false;
      }
    } 
     // if object keys do not match then return false
    else if (object1[keys] !== object2[keys]) {
     return false;
    } 
  }
  return true
};

// Test cases for the eqObject function
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log((eqObjects(cd, dc))); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log((eqObjects(cd, cd2))); // => false

module.exports = eqObjects;