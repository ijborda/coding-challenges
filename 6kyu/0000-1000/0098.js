// The range() function

function range(start, end, step = 1) {
  if (end < start || arguments.length === 0) {
    return [];
  } 
  if (arguments.length === 1) {
    start = 0;
    end = arguments['0']
  }
  let count = Math.ceil((end - start) / (step || 1));
  return Array.from(new Array(count), (_, i) => (i * step) + start);
}

console.log(range(10)) // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
console.log(range(1, 11)) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(range(0, 30, 5)) // [0, 5, 10, 15, 20, 25]);
console.log(range(1, 4, 0)) // [1, 1, 1]);
console.log(range(0)) // []);
console.log(range(10, 0)) // []);