const eqArrays = (arr1, arr2) => {
  // If both arrays are different lengths, they are also false
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Loop through both arr1 and arr2
  for (let i = 0; i < arr1.length; i++) {
    // If one indexed element do not match, return false and break
    if (Array.isArray(arr1[i])) {
      if (eqArrays(arr1[i], arr2[i])) {
        continue;
      }
      return false;
    }

    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }

  // Return true if every single element passed
  return true;
};

module.exports = eqArrays;