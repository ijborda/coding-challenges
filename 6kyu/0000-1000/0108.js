// For whom the Bell tolls

function bell(n) {
  let maxAdd = n % 2 === 0 ? (n / 2 - 1) * 2 : (Math.floor(n / 2)) * 2 - 1;
  return Array.from(new Array(n - 1)).reduce((acc, _, i) => {
    acc.push( acc[acc.length-1] + maxAdd - (i * 2) )
    return acc
  }, [n])
}

console.log(bell(1))  // [1]
console.log(bell(2))  // [2, 2]
console.log(bell(3))  // [3, 4, 3]
console.log(bell(4))  // [4, 6, 6, 4]
console.log(bell(5))  // [5, 8, 9, 8, 5]
console.log(bell(6))  // [6, 10, 12, 12, 10, 6]
console.log(bell(7))  // [7, 12, 15, 16, 15, 12, 7]
console.log(bell(8))  // [8, 14, 18, 20, 20, 18, 14, 8]
console.log(bell(9))  // [9, 16, 21, 24, 25, 24, 21, 16, 9]
console.log(bell(10)) // [10, 18, 24, 28, 30, 30, 28, 24, 18, 10]
console.log(bell(11)) // [11, 20, 27, 32, 35, 36, 35, 32, 27, 20, 11]
console.log(bell(12)) // [12, 22, 30, 36, 40, 42, 42, 40, 36, 30, 22, 12]