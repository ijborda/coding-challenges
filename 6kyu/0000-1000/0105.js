// Triangle number check

function isTriangleNumber(a) {
  let ans = false;
  let equi_num = 0;
  let inc = 0
  while (equi_num <= a) {
    equi_num += +inc;
    inc += +1;
    if (equi_num === a) {
      ans = true;
    }
  }
  return ans
}

// Test
console.log(isTriangleNumber(0)) // true
console.log(isTriangleNumber(10)) // true
console.log(isTriangleNumber(5)) // false
console.log(isTriangleNumber('str')) // false
console.log(isTriangleNumber(6.15)) // false