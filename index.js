// index.js
const head = require("./utils/head");
const tail = require("./utils/tail");
const middle = require("./utils/middle");
const assertArraysEqual = require("./utils/assertArraysEqual");
const assertEqual = require("./utils/assertEqual");
const assertObjectsEqual = require("./utils/assertObjectsEqual");
const countLetters = require("./utils/countLetters");
const countOnly = require("./utils/countOnly");
const eqArrays = require("./utils/eqArrays");
const eqObjects = require("./utils/eqObjects");
const findKey = require("./utils/findKey");
const findKeyByValue = require("./utils/findKeyByValue");
const flatten = require("./utils/flatten");
const lettersPosition = require("./utils/lettersPositions");
const map = require("./utils/map");
const takeUntil = require("./utils/takeUntil");
const without = require("./utils/without");

module.exports = {
  head,
  tail,
  middle,
  assertArraysEqual,
  assertEqual,
  assertObjectsEqual,
  countLetters,
  countOnly,
  eqArrays,
  eqObjects,
  findKey,
  findKeyByValue,
  flatten,
  lettersPosition,
  map,
  takeUntil,
  without
};
