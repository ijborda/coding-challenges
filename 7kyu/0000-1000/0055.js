// Find the nth Digit of a Number

var findDigit = function(num, nth){
    if (nth < 1) return -1
    num = Math.abs(num).toString()
    return num.length - nth < 0 ? 0 : +num[num.length - nth]
}

// Test
let x = findDigit(-456, 4)
console.log(x) // 8