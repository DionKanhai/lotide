const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`Assertion Passed`);
  } else if (actual !== expected) {
    console.log(`Assertion Failed`);
  }
};

function eqArrays(array1, array2) {
  if (array1.join() === array2.join()) {
    return true;
  } else if (array1.join() !== array2.join()) {
    return false;
  }
}
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); 