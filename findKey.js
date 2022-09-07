// Imports files needed to test the function
const assertArraysEqual = require('./assertArraysEqual');

// This function will be passed an object and a callback function
// The callback function will excute on each of the object key-value pairs
// and will return the first key that matches with the inputted key
const findKey = function(object, callback) {
  // loops through the input object key value pairs
  for (keysInObj in object) {
    // callback excutes on each value of the object
    // if the callback condition matches with the value of the object
    // then return the first key that matches 
    if (callback(object[keysInObj])) {
      return keysInObj;
    }
  }
}

//Test code
  console.log(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2)) // => logs 'noma'

assertArraysEqual(findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3)) // returns the arrays do not match!

module.exports = findKey;

