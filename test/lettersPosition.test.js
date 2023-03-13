// const hello = lettersPosition("lighthouse in the house");

// // Object to test against
// const helloTestObj = {
//   l: [0],
//   i: [1, 11],
//   g: [2],
//   h: [3, 5, 15, 18],
//   t: [4, 14],
//   o: [6, 19],
//   u: [7, 20],
//   s: [8, 21],
//   e: [9, 16, 22],
//   n: [12],
// };

// // Test comparing against outputed result and test
// for (const key in hello) {
//   assertArraysEqual(hello[key], helloTestObj[key]);
// }

const chai = require("chai");
const { assert } = chai;

const { lettersPosition } = require("../index");

describe("lettersPosition()", () => {
  it("should equal expected output baesd on input provided", () => {
    const input = "lighthouse in the house";
    const expectedOutput = {
      l: [0],
      i: [1, 11],
      g: [2],
      h: [3, 5, 15, 18],
      t: [4, 14],
      o: [6, 19],
      u: [7, 20],
      s: [8, 21],
      e: [9, 16, 22],
      n: [12],
    };

    assert.deepEqual(lettersPosition(input), expectedOutput)
  });
});
