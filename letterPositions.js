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


const letterPositions = function(sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (results[sentence[i]]) {
      results[sentence[i]].push(i);
    } else {
      results[sentence[i]] = [];
      results[sentence[i]].push(i);
    }
  }
  return results;
};

const results1 = letterPositions('Hello');

assertArraysEqual(results1['H'], [0]);
assertArraysEqual(results1['e'], [1]);
assertArraysEqual(results1['l'], [2, 3]);
assertArraysEqual(results1['o'], [4]);