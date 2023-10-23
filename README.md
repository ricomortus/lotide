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
