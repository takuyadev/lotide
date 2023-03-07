const assertArraysEqual = (arr1, arr2) => {
  // Loop through both arr1 and arr2
  for (let i = 0; i < arr1.length; i++) {
    // If one indexed element do not match, return false and break
    if (arr1[i] !== arr2[i]) {
      return `🛑🛑🛑 Assertion Failed: ${arr1} !== ${arr2}`;
    }
  }

  // Return true if every single element passed
  return `✅✅✅ Assertion Passed: ${arr1} === ${arr2}`;
};

console.log(
  assertArraysEqual([1, 2, 3], [1, 2, "3"]) // => should FAIL
);
