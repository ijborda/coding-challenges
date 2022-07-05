// Sum two arrays

function addArrays(arr1, arr2) {
  if (arr1.length === 0 && arr2.length === 0) {
    return [];
  }
  let sum = +arr1.join('') + +arr2.join('');
  return sum.toString().split(/(.*?\d)/g).filter(a => a).map(a => +a);
}

// Test
console.log(addArrays([ -6, 7 ], [ 1, 0 ])) // [-5, 7]
console.log(addArrays([6,7], [])) // [ 1, 3, 4 ] 