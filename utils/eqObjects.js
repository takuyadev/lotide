const { eqArrays } = require("../index");

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
        continue;
      }
    }

    if (typeof object1[key] === "object") {
      if (eqObjects(object1[key], object2[key])) {
        continue;
      }
    }

    // If object1 value is not equal to object2 value, return false
    if (object1[key] !== object2[key]) {
      return false;
    }
  }

  return true;
};

module.exports = eqObjects;
