const assertEqual = function (actual, expected) {
  let message = "Error producing assertion";

  if (actual === expected) {
    message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

  if (actual !== expected) {
    message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

  console.log(message);
};

const eqArrays = (arr1, arr2) => {

  // Loop through both arr1 and arr2
  for (let i = 0; i < arr1.length; i++){

    // If one indexed element do not match, return false and break
    if (arr1[i] !== arr2[i]) {
      return false
    }
  }

  // Return true if every single element passed
  return true
}

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), true); // => should FAIL