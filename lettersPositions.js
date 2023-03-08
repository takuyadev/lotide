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

//This is basically the same function as countLetters but with some extra steps.

const lettersPositions = function (word) {
  // 1. Split word into array so its loopable by filter
  // 2. Reduce the array into an object
  return word.split("").reduce((acc, curr, i) => {
    // 3. NEW: If current item is a empty space, just skip
    if (curr === " ") {
      return acc;
    }

    // 4. If property doesn't exist, then init to current index
    // 5. Push the index to key value array
    if (!acc.hasOwnProperty(curr)) {
      acc[curr] = [i];
      return acc;
    }

    acc[curr] = [...acc[curr], i];
    return acc;
  }, {});
};

const hello = lettersPositions("lighthouse in the house");

// Object to test against
const helloTestObj = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12],
};

// Test comparing against outputed result and test
for (const key in hello) {
  assertArraysEqual(hello[key], helloTestObj[key]);
}
