const chai = require("chai");
const { assert, expect } = chai;
const middle = require("../middle");

describe("eqArrays()", () => {
  it("should return [3] when passed [0, 1, 2, 3, 4, 5, 6]", () => {
    expect(middle([0, 1, 2, 3, 4, 5, 6])).to.deep.equal([3]);
  });

  it("should return [3] when passed [0, 1, 2, 3, 4, 5, 6, 7]", () => {
    expect(middle([0, 1, 2, 3, 4, 5, 6, 7])).to.deep.equal([3, 4]);
  });

  it("should return [3] when passed [0, 1, 2, 3, 4, 5, 6, 7, 8]", () => {
    expect(middle([0, 1, 2, 3, 4, 5, 6, 7, 8])).to.deep.equal([4]);
  });

  it("should return [3] when passed [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]", () => {
    expect(middle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])).to.deep.equal([4, 5]);
  });

});

// assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6]), [3]);
// assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7]), [3, 4]);
// assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7, 8]), [4]);
// assertArraysEqual(middle([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), [4, 5]);
