export const assertEqual = function(actual, expected) {
  let message = "Error producing assertion";

  if (actual === expected) {
    message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

  if (actual !== expected) {
    message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

  console.log(message);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Lighthouse Labs", "Lighthouse Labs");
assertEqual(1, 2);
assertEqual(1, 1);