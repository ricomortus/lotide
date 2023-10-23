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
  const areEqual = eqArrays(arr1, arr2);
  if (areEqual) {
    console.log('The arrays are identical!');
    return areEqual;
  }
  console.log('The arrays are not the same.');
  return areEqual;
};


let flatten = function(arr) {
  // Define new arr
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i]) === true) {
      for (let x = 0; x < arr[i].length; x++) {
        newArr.push(arr[i][x]);
      }
    } else {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};
flatten([1, 2, [3, 4], 5, [6], [1,2,3]]);

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1,2,3,4,5,6]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6],1,2,[3,4]]), [1,2,3,4,5,6,1,2,3,4]);

module.exports = flatten;