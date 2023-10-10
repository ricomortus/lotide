const tail = function(arr) {
  const newArr = arr.slice(1, arr.length);
  return newArr;
};

module.exports = tail;

