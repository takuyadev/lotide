export const assertEqual = function (actual, expected) {
  let message = "Error producing assertion";

  if (actual === expected) {
    message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

  if (actual !== expected) {
    message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

  console.log(message);
};

const head = (arr) => arr[0];

assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

assertEqual(head([5, 6, 7]), 6);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Lighthouse");
