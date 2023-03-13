const findKey = (obj, callback) => {
  // Loop through object keys
  for (const key in obj) {
    // If callback passes, return current key name
    if (callback(obj[key])) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKey;
