const assertEqual = require("../assertEqual")
const eqArrays = require("../eqArrays")

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false); // => should FAIL
assertEqual(eqArrays([[2, 3], [4]], [[2, 3], [4]]), true);
assertEqual(
  eqArrays(
    [[2, 3], [4]],
    [
      [2, 3],
      [4, 5],
    ]
  ),
  false
);
