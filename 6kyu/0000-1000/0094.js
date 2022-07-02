// Simple frequency sort

function solve(arr){
  let freq = arr.reduce((acc, a) => {
    if (a in acc) {
      acc[a] += 1;
    } else {
      acc[a] = 1;
    }
    return acc;
  }, {})
  return arr.sort((a, b) => {
    if (freq[b] - freq[a] === 0) {
      return +a - +b;
    } else {
      return freq[b] - freq[a];
    }
  })
}

console.log(solve([2,3,5,3,7,9,5,3,7]))// ,[3,3,3,5,5,7,7,2,9])
// console.log(solve([1,2,3,0,5,0,1,6,8,8,6,9,1]))// ,[1,1,1,0,0,6,6,8,8,2,3,5,9])
// console.log(solve([5,9,6,9,6,5,9,9,4,4]))// ,[9,9,9,9,4,4,5,5,6,6])
// console.log(solve([4,4,2,5,1,1,3,3,2,8]))// ,[1,1,2,2,3,3,4,4,5,8])
// console.log(solve([4,9,5,0,7,3,8,4,9,0]))// ,[0,0,4,4,9,9,3,5,7,8])