// Imports the files needed to test the function
const assertEqual = require('./assertEqual');

// This function is passed two parameters:
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
// It will return an object with the name of the key and count found in allItems (input object)
const countOnly = function(allItems, itemsToCount) {
  const results = {};
  // loop through input object
  for (const item of allItems) { 
    // if the item in input array matches with the itemsToCount array increment by 1 in results object
    if (itemsToCount[item]) {   
      if (results[item]) {
        results[item] += 1;
      } 
       // if the item in input array matches with the itemsToCount array add it to results object and add 1
      else {
        results[item] = 1;
      }
    }
  }
  return results;
};

// test code
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

console.log(countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false }));

module.exports = countOnly;