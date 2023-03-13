// const words = ["hello", "world", "lighthouse"];
// const newwords = without(words, ["lighthouse"]); // no need to capture return value for this test case
// console.log(words);
// // Make sure the original array was not altered by the without function
// assertArraysEqual(newwords, ["hello", "world", "lighthouse"]);
const chai = require("chai");
const { assert } = chai;

const { without } = require("../index");

describe("without()", () => {
  it("should return ['hello', 'world'] if data with filtering ['lighthouse'", () => {
    const input = ["hello", "world", "lighthouse"];
    const filter = ["lighthouse"] 
    assert.deepEqual(without(input, filter), ["hello", "world"]);
  });
});
