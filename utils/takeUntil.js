const takeUntil = function (array, callback) {
  let result = [];
  for (const item of array) {
    if (callback(item)) {
      return result;
    }
    result = [...result, item];
  }
  return result;
};

module.exports = takeUntil;
