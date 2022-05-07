// 16+18=214

function add(num1, num2) {
    let length = Math.max(num1.toString().length, num2.toString().length)
    let a = num1.toString().padStart(length, '0').split('')
    let b = num2.toString().padStart(length, '0').split('')
    return +a.map((d, i) => +d + +b[i]).join('')
}

// Test
let x = add(2, 11)
console.log(x) // 1103