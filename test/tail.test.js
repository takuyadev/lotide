const chai = require("chai");
const { expect, assert } = chai;
const { tail } = require("../index");

describe("tail()", () => {
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
