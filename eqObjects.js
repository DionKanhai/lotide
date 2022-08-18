const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed`);
  }
};

function eqArrays(array1, array2) {
  console.log(array2)
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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {
  let objectOneKeys = Object.keys(object1)
  let objectTwoKeys = Object.keys(object2)
  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }
  for (const keys in object1) {
    if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
      const resultsArrayComparison = eqArrays(object1[keys], object2[keys])
      if (!resultsArrayComparison) {
        return false;
      }
    } 
    else if (object1[keys] !== object2[keys]) {
     return false;
    } 
  }
  return true
};

// test case that should return true
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(eqObjects(ab, ba)); 

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
console.log((eqObjects(cd, dc))); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
console.log((eqObjects(cd, cd2))); // => false