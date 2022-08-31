// Imports the functions to run the tests
const middle = require('../middle');
const assert = require('chai').assert;

// Test code for middle function 
// using Mocha functions and Chai assertion function library
describe("#middle", () => {
  it("returns [4] for [1, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1, 3, 4, 5, 6]), [4]);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [4, 2] for [1, 2, 4, 3]", () => {
    assert.deepEqual(middle([1, 2, 4, 3]), [4, 2]);
  });
});