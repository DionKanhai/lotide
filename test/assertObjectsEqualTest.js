// imports the function from the sourced file
const assertObjectsEqual = require('../assertObjectsEqual');


// test code 
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
const cd2 = { c: "1", d: ["2", 3, 4] };

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);
assertObjectsEqual(dc, cd2);