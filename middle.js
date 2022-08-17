const middle = function(arrays) {
  let arrayLength = arrays.length
  let newArray = [];
  if (arrayLength < 3) {
    return [];
  }
  if (arrayLength % 2 !== 0) {
    newArray.push(arrays[Math.floor(arrayLength / 2)])
    return newArray;
  } if (arrayLength % 2 === 0) {
    newArray.push(arrays[(arrayLength / 2)], arrays[(arrayLength / 2 ) - 1])
  return newArray;
  } 
}
// test code
console.log(middle([1, 2, 4, 4]));

