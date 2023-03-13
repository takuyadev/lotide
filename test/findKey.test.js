const chai = require("chai");
const { assert } = chai;

const { findKey } = require("../index");

describe("findKey()", () => {
  it("should return 'noma' when passed provided input and filter callback", () => {
    const input = {
      "Blue Hill": { stars: 1 },
      Akaleri: { stars: 3 },
      noma: { stars: 2 },
      elBulli: { stars: 3 },
      Ora: { stars: 2 },
      Akelarre: { stars: 3 },
    };

    const callback = (x) => x.stars === 2;

    assert.strictEqual(findKey(input, callback), "noma");
  });
});
