//FUNCTION IMPLEMENTATION
const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅lsAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

//TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1,1);
assertEqual(1,3);
assertEqual(3,3);
