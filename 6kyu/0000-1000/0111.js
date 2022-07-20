// English beggars

function beggars(values, n){
  if (n === 0) return [];
  return values.reduce((acc, a, i) => {
    acc[i % n] += a;
    return acc
  }, Array.from(new Array(n), (_) => 0))
}

console.log(beggars([1,2,3,4,5],1)) // [15]);
console.log(beggars([1,2,3,4,5],2)) // [9,6]);
console.log(beggars([1,2,3,4,5],3)) // [5,7,3]);
console.log(beggars([1,2,3,4,5],6)) // [1,2,3,4,5,0]);
console.log(beggars([1,2,3,4,5],0)) // []);