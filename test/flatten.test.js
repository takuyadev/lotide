const chai = require("chai");
const { assert } = chai;

const { flatten } = require("../index");

describe("flatten()", () => {
  it("should return [0, 1, 2, 3, 4, 5, 6] when passed nested arrays: [0, [1, 2], 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([0, [1, 2], 3, 4, 5, 6]), [0, 1, 2, 3, 4, 5, 6]);
  });

  it("should return [0, 1, 2, 3, 4, 5, 6] when passed deep nested arrays: [0, [1, 2, [3, 4, [5, 6]]]]", () => {
    assert.deepEqual(
      flatten([0, [1, 2, [3, 4, [5, 6]]]]),
      [0, 1, 2, 3, 4, 5, 6]
    );
  });

  it("should return [0, 1, 2, 3, 4, 5, 6] when passed single layer array: [0, 1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(flatten([0, 1, 2, 3, 4, 5, 6]), [0, 1, 2, 3, 4, 5, 6]);
  });
});
