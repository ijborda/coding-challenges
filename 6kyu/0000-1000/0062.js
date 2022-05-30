// Number Format

var numberFormat = function (number) {
  let isNeg = number < 0 ? true : false
  let formatted = Math.abs(number).toString().split('').reverse().map((a, i) => {
    if (i % 3 === 0 & i !== 0) {
      return `${a},`
    } else {
      return a
    }
  }).reverse().join('')
  return  isNeg ? `-${formatted}` : formatted
};

// Test
let x = numberFormat(-100000)
console.log(x) // 100,000

// Very short answer
numberFormat = n => n.toLocaleString()