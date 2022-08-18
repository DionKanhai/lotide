function eqArrays(array1, array2) {
  console.log(array2)
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

assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 