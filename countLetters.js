const assertEqual = function (actual, expected) {
  let message = "Error producing assertion";

  if (actual === expected) {
    message = `✅✅✅ Assertion Passed: ${actual} === ${expected}`;
  }

  if (actual !== expected) {
    message = `🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`;
  }

  console.log(message);
};


const countLetters = function (word) {
  // 1. Split word into array so its loopable by filter
  // 2. Filter out the spaces inside the array
  // 3. Reduce the array into an object
  return word.split("").filter(char => char !== " ").reduce((acc, curr) => {

    // 4. If property doesn't exist, then init to 1
    // 5. Increment if it does exist
    if(!acc.hasOwnProperty(curr)){
      acc[curr] = 1
      return acc
    }
    
    acc[curr]++
    return acc
  }, {})
}
