# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs.

## Usage

**Install it:**

`npm install @ricomortus/lotide`

**Require it:**

`const _ = require('@ricomortus/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

- `head(arr: Array)`: Returns the first element of the provided array and removes it from the array.
- `tail(arr: Array)`: Returns a new array containing all elements except the first from the provided array.
- `middle(arr: Array)`: Returns the middle element(s) of the provided array.
- `without(source: Array, itemsToRemove: Array)`: Returns a new array containing elements from the `source` array that are not present in the `itemsToRemove` array.
- `flatten(arr: Array)`: Returns a new array that is a flattened version of the provided `arr`.
- `countOnly(allItems: Array, itemsToCount: Object)`: Returns an object that counts occurrences of specific items from the `allItems` array based on the `itemsToCount` object, where the key is the item to count, and the value is `true` if the item should be counted.
- `countLetters(str: String)`: Returns an object containing the count of each letter in the provided string `str`.
- `letterPositions(sentence: String)`: Returns an object indicating the indices in the string `sentence` where each character is found. For each character in the sentence, the object will contain an array of positions where the characters appears.
- `findKeyByValue(obj: Object, val: any)`: Returns the first key in the object `obj` that has a value matching the provided `val`. If no matching value is found, the function returns `undefined`.
- `assertEqual(actual: any, expected: any)`: Compares the actual and expected values for strict equality. Logs a pass message with green checkmarks if the values are strictly equal and a fail message with red stop signs if they are not.
- `eqArrays(arr1: Array, arr2: Array)`: Compares two arrays, arr1 and arr2, for strict equality. Returns true if the arrays are identical in length and content, and false otherwise.
- `assertArraysEqual(arr1: Array, arr2: Array)`: Compares two arrays, arr1 and arr2, using the eqArrays function. Logs "The arrays are identical!" if the arrays are the same and "The arrays are not the same." if they are different.
- `eqObjects(object1: Object, object2: Object)`: Compares two objects, `object1` and `object2`, to determine if they have identical key-value pairs. Returns `true` if the objects are equal and `false `otherwise.
- `assertObjectsEqual(actual: Object, expected: Object)`: Compares the `actual` and `expected` objects using `eqObjects` function. Logs a pass message with green checkmarks if the objects are equal and a fail message with red stop signs if they are not.
- `findKey(object: Object, callback: Function)`: Iterates over the object and returns the first key for which the callback returns true. If no key satisfies the callback, the function returns undefined.
- `map(array: Array, callback: Function)`: Transforms each element in the array using the provided callback function and returns a new array with the transformed values.
- `takeUntil(array: Array, callback: Function)`: Iterates over the array and returns a new array with all elements up to, but not including, the first element for which the callback returns true.
