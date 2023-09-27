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

const eqObjects = function(object1, object2) {
  //Using Object.keys to extract the KEYS of object1, object2, into a separate array so we can compare the lengths.
  let obj1Key = Object.keys(object1);
  let obj2Key = Object.keys(object2);
  //Compare the length of the KEY arrays of obj1 and obj2 to make sure they are the same length
  if (obj1Key.length === obj2Key.length) {
    //iterate over the key arrays to get the key string to access the key value pair in the object
    for (const key of obj1Key) {
      //Using the key from the array to access the key from the object and to check if the object1 and object2 [key] is an array
      if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
        //Using the eqArrays function to compare to two arrays in the object 1 and object 2 key, which will return true or false
        eqArrays(object1[key], object2[key]);
        //If it is not an array, check to make sure the primitive values of each key in each object does not match
      } else if (object1[key] !== object2[key]) {
        //If it does not match, return false
        return false;
      }
    }
  // If the length of the KEY arrays of obj1 and obj2 does not match, return false and terminate the function immediately;
  } else {
    return false;
  }
  //If it passes through the whole if block without returning a false, this means the conditions have passed and there is a match in the two objects and hence, return true.
  return true;
};

//input: obj1, obj2,
//output: console.log a message

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected) === false) {
    console.log(`🛑🛑🛑 Assertion Failed:${inspect(actual)} !== ${inspect(expected)}`);
  } else if (eqObjects(actual, expected) === true) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  }
};