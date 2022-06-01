// Dashatize it

function dashatize(num) {
  if (num < 0) num = Math.abs(num)
  if (Number.isNaN(num) || num.toString().length === 1) {
    return num.toString()
  }
  return num.toString().split('').map((a, i) => {
    if (a % 2 !== 0 && i === 0) {
      return `${a}-`
    } else if (a % 2 !== 0 && i === num.toString().length - 1) {
      return `-${a}`
    } else if (a % 2 !== 0 && i !== 0  && i !== num.toString().length - 1) {
      return `-${a}-`
    } else {
      return a
    }
  }).join('').replace(/-+/g, '-')
}

// Test
let x = dashatize(5311)
console.log(x) // "5-3-1-1"