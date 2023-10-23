//FUNCTION IMPLEMENTATION
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅lsAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//Function findKey
//input: object, callback
//output: Return the first key when callback is truthy, if no key, return undefined.

const findKey = function(object, callback) {
  for (const key in object) {
    if (callback(object[key]) === true) {
      return key;
    }
  }
};

//Testing
const result1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2);

const result2 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 3);

assertEqual(result1, 'noma');
assertEqual(result2, 'Akaleri');

module.exports = findKey;