const chai = require("chai");
const { assert } = chai;

const { countLetters } = require("../index");

describe("countLetters()", () => {
  it("should return null when passed 0", () => {
    assert.deepEqual(countLetters(0), null);
  });

  it("should return null when passed []", () => {
    assert.deepEqual(countLetters([]), null);
  });

  it("should return object when passed hello: { h: 1, e: 1, l: 2, o: 1 }", () => {
    assert.deepEqual(countLetters("hello"), { h: 1, e: 1, l: 2, o: 1 });
  });
});
