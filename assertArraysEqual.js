function eqArrays(array1, array2) {
  if (array1.join() === array2.join()) {
    return true;
  } else if (array1.join() !== array2.join()) {
    return false;
  }
}

const assertArraysEqual = function(array1, array2) {
  if (array1 === array2) {
    console.log(`The Arrays match!`);
  } else if (array1 !== array2) {
    console.log(`The Arrays do not match!`);
  }
};

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 