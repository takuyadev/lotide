const { eqArrays } = require("../index");

const chai = require("chai");
const { assert } = chai;

describe("eqArrays()", () => {
  it("should return true when passed array with same values", () => {
    assert.isTrue(eqArrays([1, 2, 3], [1, 2, 3]));
  });

  it("should return true when passed nested arrays with same value", () => {
    assert.isTrue(eqArrays([[2, 3], [4]], [[2, 3], [4]]));
  });

  it("should return true when passed array with loose comparison (3 vs '3')", () => {
    assert.isFalse(eqArrays([1, 2, 3], [1, 2, "3"]));
  });

  it("should return true when passed array with loose comparison", () => {
    assert.isFalse(
      eqArrays(
        [[2, 3], [4]],
        [
          [2, 3],
          [4, 5],
        ]
      )
    );
  });
});
