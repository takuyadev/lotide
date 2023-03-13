const chai = require("chai");
const { assert } = chai;

const { takeUntil } = require("../index");

describe("takeUntil()", () => {
  it("should return [1, 2, 5, 7, 2] when passed string array with filter callback", () => {
    const input = [
      "I've",
      "been",
      "to",
      "Hollywood",
      ",",
      "I've",
      "been",
      "to",
      "Redwood",
    ];

    const callback = (x) => x === ",";

    assert.deepEqual(takeUntil(input, callback), ["I've", "been", "to", "Hollywood"]);
  });

  it("should return [1, 2, 5, 7, 2] when passed string array with filter callback", () => {
    const input = [1, 2, 5, 7, 2];
    const callback = (x) => x < 0;

    assert.deepEqual(takeUntil(input, callback), [1, 2, 5, 7, 2]);
  });
});
