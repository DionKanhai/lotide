function eqArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log(`The Arrays match!`);
  } else if (array1 !== array2) {
    console.log(`The Arrays do not match!`);
  }
};


// the callback is the filtering if condition

// will need to output the numbers/value of the input array
// up until the value/number breaks the callback function condition 

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
  // calls the callback function and checks if the item in the input array 
  // does not pass the callback if condition, if it does not
  // then push item to results array
  if (callback(item)) {
    return results;
  }
    results.push(item);
  }
  return results;
};

const results1 = takeUntil(data1, value => value < 0)
console.log(results1);

//test code
console.log(assertArraysEqual(takeUntil(data1, value => value < 0)))
