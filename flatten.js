
// Flatten function
const flatten = (arr) => {
  // Copy array to prevent mutation of original layer with slice
  // Use reduce to iterate and utilize chaining functions from returned slice

  return arr.slice().reduce((acc, curr) => {
    // Check if current iteration is array or not
    const isArray = Array.isArray(curr);

    // If it is an array, loop through and push
    if (isArray) {

      // Use recursion to 
      acc = [...acc, ...flatten(curr)]
    }

    // If not, then just push current value as is
    if (!isArray) {
      acc = [...acc, curr];
    }

    // Return final accumulator after checks
    return acc;
  }, []);
};


module.exports = flatten