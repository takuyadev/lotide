const without = (source, itemsToRemove) => {
  let newArr = [...source];

  // Loop through both arr1 and arr2
  for (let i = 0; i < itemsToRemove.length; i++) {
    newArr = newArr.filter((item) => item !== itemsToRemove[i]);
  }

  // Return true if every single element passed
  return newArr;
};

module.exports = without;
