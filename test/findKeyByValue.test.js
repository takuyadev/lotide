const chai = require("chai");
const { assert } = chai;

const { findKeyByValue } = require("../index");

// Example Data
const input = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

describe("findKeyByValue()", () => {
  it("should return 'drama' when passed data and filter; 'The Wire' ", () => {
    assert.strictEqual(findKeyByValue(input, "The Wire"), "drama");
  });

  it("should return 'comedy' when passed data and filter; 'Brooklyn Nine-Nine' ", () => {
    assert.strictEqual(findKeyByValue(input, "Brooklyn Nine-Nine"), "comedy");
  });
});
