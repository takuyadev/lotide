const chai = require("chai");
const { assert } = chai;
const { countOnly } = require("../index");

describe("countOnly()", () => {
  it("should return {Jason: 1, Fang: 2} when passed provided data and filter", () => {
    const data = [
      "Karl",
      "Salima",
      "Agouhanna",
      "Fang",
      "Kavith",
      "Jason",
      "Salima",
      "Fang",
      "Joe",
    ];

    const result = countOnly(data, {
      Jason: true,
      Karima: true,
      Fang: true,
      Agouhanna: false,
    });

    assert.deepEqual(result, { Jason: 1, Fang: 2 });
  });
});
