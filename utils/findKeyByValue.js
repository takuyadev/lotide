// Search is the title name
// Key is the genre
const findKeyByValue = function (obj, search) {
  if (!search) {
    return undefined;
  }

  for (const item in obj) {
    // In this case, item is going to be [scifi, comedy, drama]

    // We want to return when we find search matches with current item

    if (search === obj[item]) {
      return item;
    }
  }

  return undefined;
};

module.exports = findKeyByValue;