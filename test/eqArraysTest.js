const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([3, 2, 1], [1, 2, 3]), false); // => should FALSE
assertEqual(eqArrays(['Hllo', 'World'], ['Hello', 'World']), false); // => should FALSE
assertEqual(eqArrays([3, 2, 1], ['1', 2, 3]), false); // => should FALSE
