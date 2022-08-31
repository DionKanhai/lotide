// Imports the function from the source file
const tail = require('../tail');
const assert = require('chai').assert;

// Test code for tail function 
// using Mocha functions and Chai assertion function library
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Hello', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns ['light', 4] for [1, 'light', 4]", () => {
    assert.deepEqual(tail([1, 'light', 4]), ['light', 4]);
  });
});