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

function without(source, itemsToRemove) {
  for (let i = 0; i < itemsToRemove.length; i++) {
    const remove = source.includes(itemsToRemove[i])
    if (remove) {
      source.splice(i, 1)
    }
  }
  return source;
}
console.log(without([1, 2, 3], [1]))


