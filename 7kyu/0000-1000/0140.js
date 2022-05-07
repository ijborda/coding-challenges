// Flatten and sort an array

"use strict";

function flattenAndSort(array) {
  return [].concat(...array).sort((a, b) => a - b);
}

// Test
let x = flattenAndSort([[3, 2, 1], [7, 9, 8], [6, 4, 5]])
console.log(x) // [1, 2, 3, 4, 5, 6, 7, 8, 9]