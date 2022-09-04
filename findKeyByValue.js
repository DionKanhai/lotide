const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed`);
  }
};

/* this function will: 
Step 1. Take in an object and a value 
Step 2. Scan the object and return the first key with the inputted value
Step 3. If no key with that value is found, return undefined */

const findKeyByValue = function(object, value) {
  // loop through the object
  for (const keys in object) {
    // find the first key-value pair that matches with the input value and return it
    if (object[keys] === value)
      return keys;
  }
}

// test cases 
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};
console.log(findKeyByValue(bestTVShowsByGenre, "Hi"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
