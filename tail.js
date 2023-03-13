const tail = function (arr) {
  // if falsy values are passed, then return null
  if (!arr) {
    return null;
  }

  // If parameter is not an array
  if (!Array.isArray(arr)) {
    return null;
  }

  // If array only has one value
  if (arr.length === 1) {
    return arr;
  }
  
  // Spreading operator copies the array, and thus will not modify existing array
  // Skip the first index, spread the rest onto tail variable
  const [, ...tail] = arr;
  return tail;
};

module.exports = tail;
