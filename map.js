let eqArrays = function(arr1, arr2) {
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

//input: Array to map, Callback funciton
//output: Return a new array based on the results of the callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

//Test one: String array
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g','c','t','m','t']);

//Test two: Numbers array
const numbers = [1,2,3,4,5];
const results2 = map(numbers, number => number);
assertArraysEqual(results2, [1,2,3,4,5]);

//Test three: last letters of string array
const results3 = map(words, word => word[word.length - 1]);
assertArraysEqual(results3, ['d', 'l', 'o', 'r', 'm']);
