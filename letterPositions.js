// Imports the files needed to test the function
const assertArraysEqual = require('./assertArraysEqual');

/* function that will take a sentence and return an object with the key (individual strings) 
and value (all indices where the string is found)*/
const letterPositions = function(sentence) {
  const results = {};
  console.log(results)
  for (let i = 0; i < sentence.length; i++) {
    //variable that stores the individual letter positions of the input string in the loop
    const character = sentence[i];
    // skip spaces
    if (character !== ' ') {
      if (!results[character]) {
        results[character] = [];
      }
      // push the individual letter positions of the input string to the results object
      results[character].push(i)
    }
  }
  return results;
};

//test code
console.log(letterPositions(`hello world`));
assertArraysEqual(letterPositions("hello").e, [1]);

