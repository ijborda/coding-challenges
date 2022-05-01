// Don't give me five!

function dontGiveMeFive(start, end) {
  return Array.from(new Array(end - start + 1), (_, i) => i + start).filter(a => !a.toString().includes(5)).length;
}

// Test
let x = dontGiveMeFive(4, 17)
console.log(x) // 12