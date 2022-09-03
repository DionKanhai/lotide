// function that is passed a value and checks if it matches the second value passed in
// and then asserts if two values are equal or not
const assertEqual = function(actual, expected) {
// if the input matches the output then assert passed  
  if (actual === expected) {
    console.log(`Assertion Passed`);
// if the input does not match the output then assert fail
  } else if (actual !== expected) {
    console.log(`Assertion Failed`);
  }
};
// enables the function to be exported to other files
module.exports = assertEqual;