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

const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log(`The Arrays match!`);
  } else if (array1 !== array2) {
    console.log(`The Arrays do not match!`);
  }
};

// This function should:
// scan object and return the first key for which callback returns truthy
// if no key is found then return undefined
//Steps that need to be taken:

// the callback function is the if condition 
// in this case is saying that the value is 2 which corresponds to the 
//KEY 
// need to point the VALUE (OUTPUT) of the CALLBACK to the VALUE of the object 
// while the LOOP is iterating over the object 

const findKey = function(object, callback) {
  // loops through the input object key value pairs
  for (keysInObj in object) {
    // passes the values of object keys to callback function and
    // callback excutes on each value of the object
    // if the callback condition matches with the value of the object
    // then return the first key that matches 
    if (callback(object[keysInObj])) {
      return keysInObj;
    }
  }
}

//test code
  console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))

assertArraysEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3))

