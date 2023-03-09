
const words = ["ground", "control", "to", "major", "tom"];

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


const map = function (array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const results1 = map(words, (word) => word[0]);

const results2 = map(["hello", "my", "name"], (word) => word[0]);
const results3 = map(["a", "ab", "ac", "an", "aq", "aw", "ae", "ag", "af", "ad",], (word) => word[0]);

assertArraysEqual(results1, ['g', 'c', 't', 'm', 't'])
assertArraysEqual(results2, ["h", "m", "n"]);
assertArraysEqual(results3, ["a", "a","a","a","a","a","a","a","a","a",]);