// imports the function from the sourced file
const assertObjectsEqual = require('../assertObjectsEqual');


// Test code 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

// Passing the assertObjectsEqual function two objects and will 
// assert if two objects are equal and logs the output to the console
assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(dc, cd2);