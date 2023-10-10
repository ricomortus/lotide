// const assertEqual = require('../assertEqual');
// const tail = require('../tail');

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// console.log(tail(words));
// assertEqual(tail(words), ["Lighthouse", "Labs"]);

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });
});