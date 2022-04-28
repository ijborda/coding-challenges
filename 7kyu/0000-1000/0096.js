// Even and Odd !

function evenAndOdd(num){
    let ne = [...num.toString()].filter(a => a % 2 === 0).join('');
    let no = [...num.toString()].filter(a => a % 2 !== 0).join('');
    return [+ne, +no]
}

// Test
let x = evenAndOdd(126453)
console.log(x) // [264, 153]