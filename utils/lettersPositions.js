const lettersPositions = function (word) {
  // 1. Split word into array so its loopable by filter
  // 2. Reduce the array into an object
  return word.split("").reduce((acc, curr, i) => {
    // 3. NEW: If current item is a empty space, just skip
    if (curr === " ") {
      return acc;
    }

    // 4. If property doesn't exist, then init to current index
    // 5. Push the index to key value array
    if (!acc.hasOwnProperty(curr)) {
      acc[curr] = [i];
      return acc;
    }

    acc[curr] = [...acc[curr], i];
    return acc;
  }, {});
};

module.exports = lettersPositions;