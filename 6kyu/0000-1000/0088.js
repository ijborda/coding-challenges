// Twisted Sum

function twistedSum(n) {
  return Array.from(new Array(n), (_, i) => i + 1).reduce((acc, a) => {
    return acc + +a.toString().split('').reduce((sum, digit) => sum + +digit, 0);
  }, 0);
}

// console.log(twistedSum(3)) // 6
// console.log(twistedSum(10)) // 46
// console.log(twistedSum(11)) // 48
console.log(twistedSum(12)) // 51