const assertArraysEqual = require("../assertArraysEqual")
const middle = require("../middle")


assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6]), [3]);
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7]), [3, 4]);
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7, 8]), [4]);
assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [4, 5]);