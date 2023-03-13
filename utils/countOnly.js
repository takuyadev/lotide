// Take in an object and an array
// First parameter is the source array you want to count
// [a, b, a, c, e, f, d]
// Second input is an object that tells the algorithm which value you want to count
// {a: true b: false}
// If false, don't count
// If not included, don't count
// If none of the above, count

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count

const countOnly = function (names, searchItems) {
  const results = {};

  // Loop through search parameters / conditions
  for (const search in searchItems) {
    const searchParameters = searchItems[search];

    // ? Checks the value inside searchItems, and sees if  it is true or false
    // If it is true, then init loop
    // If not, skip the search since we don't wanna search
    if (searchParameters) {
      let count = 0;

      // We loop through firstNames
      for (const name of names) {
        // If search (key value in object) is === name
        if (search === name) {
          count++;
        }
      }

      if (count > 0) {
        results[search] = count;
      }
    }
  }

  return results;
};

module.exports = countOnly;
