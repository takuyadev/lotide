const getHead = (arr, expected) => {
  const [actual,] = arr;

  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }

  if (actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return actual;
};

getHead([5, 6, 7], 5);
getHead(["hi", "one", "two"], "one");
