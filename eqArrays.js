//FUNCTION IMPLEMENTATION
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅lsAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};


/**
 * Input: two arrays
 * Output: True or false based on a perfect match
 * Process:
 *  Function eqArrays (array 1, array 2)
 *    Use a for loop to iterate over each element in the first array to compare to the index of the second array element
 *      If one of them does not match, return false
 *      else return true
 */

let eqArrays = function(arr1, arr2) {
  for (let i = 0; i <= arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), false); // => should FALSE
assertEqual(eqArrays(['Hllo', 'World'], ['Hello', 'World']), false); // => should FALSE
assertEqual(eqArrays([3, 2, 1], ['1', 2, 3]), false); // => should FALSE
