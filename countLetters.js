//FUNCTION IMPLEMENTATION
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅lsAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let results = {};
  for (const letter of str) {
    if (results[letter]) {
      results[letter] += 1;
    } else {
      results[letter] = 1;
    }
  }
  return results;
};

const result1 = countLetters('Hello');

assertEqual(result1['H'], 1);
assertEqual(result1['e'], 1);
assertEqual(result1['l'], 2);
assertEqual(result1['o'], 1);