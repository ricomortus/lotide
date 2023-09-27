let eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

console.log(eqArrays([1,2,4], [1,2,3]));


let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log('The arrays are not the same.');
  } else if (eqArrays(arr1,arr2) === true) {
    console.log('The arrays are identical!');
  }
};
assertArraysEqual([1,3,3],[1,2,3]);
assertArraysEqual([1,2,3],[1,2,3]);