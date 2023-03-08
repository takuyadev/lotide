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

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }

  for (const key in object1) {
    // If object2 doesnt have currently selected object1 key, return false
    if (!object2[key]) {
      return false;
    }

    // Check if current iteration is array
    if (Array.isArray(object1[key])) {
      //If it is, check for equality for the currently selected array
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
      continue;
    }

    // If object1 value is not equal to object2 value, return false
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  let verify = eqObjects(actual, expected);
  let message = "Error producing assertion";

  if (verify) {
    message = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(
      expected
    )}`;
  }

  if (!verify) {
    message = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(
      expected
    )}`;
  }

  console.log(message);
};

assertObjectsEqual({ a: 1, b: 2 }, { b: 2, a: 1 });
