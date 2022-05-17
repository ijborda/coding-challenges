// Char Code Calculation

function calc(x){
    let total1 = x.split('').map(a => a.charCodeAt()).join('')
    let total2  = total1.replace(/7/g, a => '1')
    return total1.split('').reduce((acc, a) => acc + +a, 0) - total2.split('').reduce((acc, a) => acc + +a, 0)
}

// Test
let x = calc('aaaaaddddr')
console.log(x) // 6