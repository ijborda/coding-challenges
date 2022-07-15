// Number of Divisions

const divisions = (n, divisor) => {
  let pow = 0
  while (Math.pow(divisor, pow) <= n) {
    pow += 1;
  }
  return pow - 1;
};

// Test
console.log(divisions(6, 2)) // 2)
console.log(divisions(100, 2)) // 6)
console.log(divisions(2450, 5)) // 4)
console.log(divisions(9999, 3)) // 8)
console.log(divisions(2, 3)) // 0)
console.log(divisions(5, 5)) // 1)