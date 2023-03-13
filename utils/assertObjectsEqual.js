const { eqObjects } = require("../index");

// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  let verify = eqObjects(actual, expected);
  let message = "Error producing assertion";

  if (verify) {
    message = `✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(
      expected
    )}`;
  }

  if (!verify) {
    message = `🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(
      expected
    )}`;
  }

  console.log(message);
};

module.exports = assertObjectsEqual;
