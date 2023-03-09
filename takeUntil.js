const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];

const data2 = [
  "I've",
  "been",
  "to",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];

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

const takeUntil = function (array, callback) {
  // ...
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    }
    result = [...result, item];
  }
  return result;
};

const results1 = takeUntil(data1, (x) => x < 0);
const results2 = takeUntil(data2, (x) => x === ",");

assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);