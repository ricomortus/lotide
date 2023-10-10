const head = function(arr) {
  const firstElement = arr.shift();
  return firstElement;
};

module.exports = head;