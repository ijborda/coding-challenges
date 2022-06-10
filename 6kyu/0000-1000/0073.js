// +1 Array

function upArray(arr){
  if (!arr.every(a => a >= 0 && a <= 9) || arr.length === 0) {
    return null
  }
  return (BigInt(arr.join('')) + 1n).toString().split('').map(a => +a)
}

// Test
console.log(upArray([2,3,9])) // [2,4,0]);
console.log(upArray([4,3,2,5])) // [4,3,2,6]);
console.log(upArray([1,-9])) // null);
console.log(upArray([1,33])) // null);
console.log(upArray([ 9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 7 ])) // '[9, 2, 2, 3, 3, 7, 2, 0, 3, 6, 8, 5, 4, 7, 7, 5, 8, 0, 8]'