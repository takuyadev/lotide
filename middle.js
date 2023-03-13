const middle = (arr) => {
  // Round down the division using Math.floor()
  const middleIndex = Math.floor(arr.length / 2);

  // Return either one or two based on if it's divisible by 2
  if (arr.length % 2 === 0) {
    return [arr[middleIndex - 1], arr[middleIndex]];
  }

  return [arr[middleIndex]];

  // ? Ternary operator - single line implementation
  // return arr.length % 2 === 0
  //   ? [arr[middleIndex], arr[middleIndex + 1]]
  //   : [arr[middleIndex]];
};

module.exports = middle;
