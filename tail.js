

const tail = function(arr) {
  // Spreading operator copies the array, and thus will not modify existing array
  const [, ...tail] = arr;
  return tail;
};


module.exports = tail