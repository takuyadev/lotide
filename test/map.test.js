const chai = require("chai");
const { assert } = chai;

const { map } = require("../index");

describe("map()", () => {
  it("should return ['g', 'c', 't', 'm', 't'] when passed data", () => {
    const input = ["ground", "control", "to", "major", "tom"];
    const callback = (word) => word[0];

    assert.deepEqual(map(input, callback), ["g", "c", "t", "m", "t"]);
  });

  it("should return [0, 2, 4, 6, 8] when passed number and double num callback", () => {
    const input = [0, 1, 2, 3, 4];
    const callback = (num) => num * 2;

    assert.deepEqual(map(input, callback), [0, 2, 4, 6, 8]);
  });
});
