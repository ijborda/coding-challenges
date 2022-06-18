// Simple Fun #79: Delete a Digit

function deleteDigit(n) {
  let digits = n.toString().split('').map(a => +a);
  let max = 0;
  for (let i = 0; i < digits.length; i++) {
    let current = +digits.filter((_, j) => j !== i).join('');
    if (current > max) {
      max = current;
    }
  }
  return max
}

// Test
console.log(deleteDigit(152)) // 52
console.log(deleteDigit(1001)) // 101
console.log(deleteDigit(10)) // 1