// Function that finds the middle number of an array depending on length
const middle = function(arrays) {
  let arrayLength = arrays.length
  let newArray = [];
  // returns empty array for arrays with 2 or less numbers
  if (arrayLength < 3) {
    return [];
  };
  // finds index of middle number when length of array is odd
  if (arrayLength % 2 !== 0) {
    newArray.push(arrays[Math.floor(arrayLength / 2)]);
    // finds index of middle numbers when length of array is even
  } if (arrayLength % 2 === 0) {
    newArray.push(arrays[(arrayLength / 2)], arrays[(arrayLength / 2 ) - 1]);
  } 
  return newArray;
};

module.exports = middle;