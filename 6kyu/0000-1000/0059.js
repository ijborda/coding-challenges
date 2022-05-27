// Write Number in Expanded Form

function expandedForm(num) {
  return num.toString()
    .split('')
    .map((a, i, arr) => Number(a + '0'.repeat(arr.length - i - 1)))
    .filter(a => a !== 0)
    .join(' + ')
}

// Test
let x = expandedForm(70304)
console.log(x) // '70000 + 300 + 4'