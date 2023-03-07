const eqArrays = (arr1, arr2) => {
  
  // If both arrays are different lengths, they are also false
  if (arr1.length !== arr2.length){
    return false
  }  

  // Loop through both arr1 and arr2
  for (let i = 0; i < longestLength; i++) {
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

const without = (source, itemsToRemove) => {
  let newArr = [...source];

  // Loop through both arr1 and arr2
  for (let i = 0; i < itemsToRemove.length; i++) {
    newArr = newArr.filter((item) => item !== itemsToRemove[i]);
  }

  // Return true if every single element passed
  return newArr;
};

const words = ["hello", "world", "lighthouse"];
const newwords = without(words, ["lighthouse"]); // no need to capture return value for this test case
console.log(words);
// Make sure the original array was not altered by the without function
assertArraysEqual(newwords, ["hello", "world", "lighthouse"]);
