// function that asserts if two values are equal or not
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed`);
  }
};
// enables the function to be exported to other files
module.exports = assertEqual;