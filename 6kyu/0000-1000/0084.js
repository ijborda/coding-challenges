// Number Zoo Patrol

// return the missing number!
function findNumber(array) {
  let total = Array.from(new Array(array.length + 1), (_, i) => i + 1).reduce((acc, a) => acc + a, 0);
  let sum = array.reduce((acc, a) => acc + a, 0);
  return total - sum;
}

// Test
console.log(findNumber([1,3,4,5,6,7,8])) // 2
console.log(findNumber([7,8,1,2,4,5,6])) // 3
console.log(findNumber([1,2,3,5])) // 4
console.log(findNumber([1,3])) // 2
console.log(findNumber([2,3,4])) // 1
console.log(findNumber([ 13, 11, 10, 3, 2, 1, 4, 5, 6, 9, 7, 8 ])) // 12
console.log(findNumber([ 1, 2, 3 ])) // 4