const chai = require("chai");
const { expect, assert } = chai;
const { tail } = require("../index");

describe("tail.js", () => {
  it("should return ['Labs'] when passed ['Hello', 'Lighthouse', 'Labs']", () => {
    expect(tail(["Hello", "Lighthouse", "Labs"])).to.deep.equal([
      "Lighthouse",
      "Labs",
    ]);
  });

  it("should return ['Hello'] when passed ['Hello']", () => {
    expect(tail(["Hello"])).to.deep.equal(["Hello"]);
  });

  it("should return null when passed number", () => {
    expect(tail(1)).to.equal(null);
  });

  it("should return null when passed string", () => {
    expect(tail("tring")).to.equal(null);
  });
});

// // TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result, ["Lighthouse", "Labs"]); // => will always fail!
// assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
// assertEqual(result[1], "Labs"); // ensure second element is "Labs"

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!
