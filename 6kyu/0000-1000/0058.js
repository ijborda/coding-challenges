// Reach Me and Sum my Digits

function sumDigNthTerm(initval, patternl, nthterm) {
  let nthtermSum = Array.from(new Array(nthterm - 1), (_, i) => i + 1).reduce((acc, a, i) => acc + patternl[i % patternl.length], initval)
  return nthtermSum.toString().split('').reduce((acc, a) => acc + +a, 0)
}

// Test
let x = sumDigNthTerm(10, [2, 1, 3], 6)
console.log(x) // 10