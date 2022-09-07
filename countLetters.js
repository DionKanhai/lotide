// imports the function from the sourced file 
const assertEqual = require('./assertEqual');

/* This function countLetters will take an input string and then return an object
that has the count of the frequency of each letter in the string
 */
const countLetters = function (stringsToCount) {
  const results = {};
  // make the characters in the string lowercase letters and loop through it
  for (const character of stringsToCount.toLowerCase()) { 
    if (character !== ' ') {
      // if the character exists in results object increment value by 1
      if (results[character]) {
        results[character] += 1; 
      // if character does not exist in results object then create the key in the results object with a value of 1
      } else {
        results[character] = 1; 
      }
    }
  }
  return results;
};

// test code 
console.log(countLetters("Lighthouse labs"));
assertEqual(countLetters("Lighthouse labs"));

module.exports = countLetters;