const chai = require("chai");
const { assert } = chai;
const { eqObjects } = require("../index");

describe("eqObjects()", () => {
  it("should return true if unsorted objects are deep equal", () => {
    const input = [
      { color: "red", size: "medium" },
      { size: "medium", color: "red" },
    ];
    assert.isTrue(eqObjects(input[0], input[1]));
  });

  it("should return true if unsorted objects are not deep equal", () => {
    const input = [
      { color: "red", size: "medium" },
      {
        size: "medium",
        color: "red",
        sleeveLength: "long",
      },
    ];

    assert.isFalse(eqObjects(input[0], input[1]));
  });

  it("should return true if unsorted objects are not deep equal", () => {
    const input = [
      {
        size: "medium",
        colors: ["red", "blue"],
      },
      {
        size: "medium",
        colors: ["red", "blue"],
        sleeveLength: "long",
      },
    ];
    assert.isFalse(eqObjects(input[0], input[1]));
  });
});
