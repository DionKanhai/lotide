/* Function that receives an array as a parameter, finds 
 the middle number of that array and 
then returns a new array with the middle number */
const middle = function(arrays) {
  let arrayL = arrays.length 
  let newArray = [];
  // returns empty array for arrays with 2 or less numbers
  if (arrayL < 3) {
    return [];
  };
  // returns index of middle number when length of array is odd and pushes it to new array
  if (arrayL % 2 !== 0) {
    newArray.push(arrays[Math.floor(arrayL / 2)]);
    // returns index of middle numbers when length of array is even and pushes it to new array
  } if (arrayL % 2 === 0) {
    newArray.push(arrays[(arrayL / 2) - 1], arrays[(arrayL / 2 )]);
  } 
  return newArray;
};

// enables the middle function to be exported
module.exports = middle;