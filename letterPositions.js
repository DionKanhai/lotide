function eqArrays(array1, array2) {
  if (array1.join() === array2.join()) {
    return true;
  } else if (array1.join() !== array2.join()) {
    return false;
  }
};

const assertArraysEqual = function (array1, array2) {
  if (array1 === array2) {
    console.log(`The Arrays match!`);
  } else if (array1 !== array2) {
    console.log(`The Arrays do not match!`);
  }
};

/* function that will take a sentence and return an object with the key (individual strings) 
and value (all indices where the string is found)*/
const letterPositions = function(sentence) {
  const results = {};
  console.log(results)
  for (let i = 0; i < sentence.length; i++) {
    const character = sentence[i];
    if (character !== ' ') {
      if (!results[character]) {
        results[character] = [];
      }
      results[character].push(i)
    }
  }
  return results;
}

//test code
console.log(letterPositions(`hello world`));

