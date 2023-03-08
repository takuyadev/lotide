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

const middle = (arr) => {
  // Round down the division using Math.floor()
  const middleIndex = Math.floor(arr.length / 2);

  // Return either one or two based on if it's divisible by 2
  if (!arr.length % 2 === 0) {
    return [arr[middleIndex], arr[middleIndex + 1]];
  }

  return [arr[middleIndex]];

  // ? Ternary operator - single line implementation
  // return arr.length % 2 === 0
  //   ? [arr[middleIndex], arr[middleIndex + 1]]
  //   : [arr[middleIndex]];
};

console.log(middle([0, 1, 2, 3, 4, 5, 6]));
console.log(middle([0, 1, 2, 3, 4, 5, 6, 7]));
console.log(middle([0, 1, 2, 3, 4, 5, 6, 7, 8]));