const eqArrays = require('./eqArrays');

let assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === false) {
    console.log('The arrays are not the same.');
  } else if (eqArrays(arr1,arr2) === true) {
    console.log('The arrays are identical!');
  }
};

module.exports = assertArraysEqual;
