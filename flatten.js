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

function flatten(arrays) {
  if (Array.isArray(arrays)) { 
    for (let i = 0; i < arrays.length; i++) { 
      return arrays.flat() 
     }
    }
  };
console.log(flatten([1, 2, [3, 4], 5, [6]]))
   