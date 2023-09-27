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

let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log('The arrays are not the same.');
  } else if (eqArrays(arr1,arr2) === true) {
    console.log('The arrays are identical!');
  }
};

let middle = function(arr) {
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    const middleIndex = Math.floor(arr.length / 2);
    return [arr[middleIndex]];
  } else {
    const middleIndex1 = arr.length / 2 - 1;
    const middleIndex2 = arr.length / 2;
    return [arr[middleIndex1], arr[middleIndex2]];
  }
};

assertArraysEqual(middle([1,2,3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]);