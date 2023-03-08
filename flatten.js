const eqArrays = (arr1, arr2) => {
  // If both arrays are different lengths, they are also false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Loop through both arr1 and arr2
  for (let i = 0; i < arr1.length; i++) {
    // If one indexed element do not match, return false and break
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  // Return true if every single element passed
  return true;
};

const assertArraysEqual = (arr1, arr2) => {
  let verify = eqArrays(arr1, arr2);
  let message = "Error producing assertion";

  if (verify) {
    message = `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
  }

  if (!verify) {
    message = `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
  }

  console.log(message);
};

assertArraysEqual([1, 2, 3], [1, 2, "3"]); // => should FAIL

// Flatten function
const flatten = (arr) => {
  // Copy array to prevent mutation of original layer with slice
  // Use reduce to iterate and utilize chaining functions from returned slice

  return arr.slice().reduce((acc, curr) => {
    // Check if current iteration is array or not
    const isArray = Array.isArray(curr);

    // If it is an array, loop through and push
    if (isArray) {
      curr.forEach((item) => acc.push(item));
    }

    // If not, then just push current value as is
    if (!isArray) {
      acc.push(curr);
    }

    // Return final accumulator after checks
    return acc;
  }, []);
};

console.log(
  flatten([[0], 1, 2, [3, 4], 5, [6], 7, [8, 9, 10, 11, 12], 13, 14, [15]]) // => [1, 2, 3, 4, 5, 6]
);
