const assertEqual = function (actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed`);
  }
};

// stringsToCount is any amount of strings  
// countLetters will count the frequency of each letter in the stringsToCount
const countLetters = function (stringsToCount) {
  const results = {};
  for (const character of stringsToCount.toLowerCase()) {
    if (character !== ' ') {
      if (results[character]) {
        results[character] += 1; // if key exists in results object increment value by 1
      } else {
        results[character] = 1;  // if key does not exist in results object then create the key in the results object with a value of 1
      }
    }
  }
  return results;
}

// test code 
console.log(countLetters("Lighthouse labs"))

// step 1. break the string into individual letters
// step 2. loop through the string input of stringsToCount
// step 3. each string has an index value 
// step 4. if two index values match add them 
