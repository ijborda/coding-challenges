// Give me a Diamond

function diamond(n){
  if (n % 2 === 0 || n <= 0) {
    return null;
  }
  return Array.from(new Array(n)).map((a, i) => {
    let starNum = i < n/2 ? i * 2 + 1 : (n - 1 - i) * 2 + 1; 
    return ' '.repeat((n - starNum) / 2) + '*'.repeat(starNum) + '\n';
  }).join('');
}

// Test
console.log(diamond(1)) // "*\n"
console.log(diamond(3)) // " *\n***\n *\n"
console.log(diamond(5)) // "  *\n ***\n*****\n ***\n  *\n"
console.log(diamond(2)) // null
console.log(diamond(-3)) // null
console.log(diamond(0)) // null