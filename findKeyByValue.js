const assertEqual = function (actual, expected) {
  let message = "Error producing assertion";

  if (actual === expected) {
    message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

  if (actual !== expected) {
    message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

  console.log(message);
};

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
      return item
    }
  }

  return undefined
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
