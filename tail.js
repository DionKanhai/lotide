// Function that returns everything but the first index
// using slice method on an array
const tail = function(array) {
  return array.slice(1);
};

// enables the function to be exported to other files
module.exports = tail;