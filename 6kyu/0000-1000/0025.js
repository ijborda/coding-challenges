// Playing with digits

function digPow(n, p){
    let k = n.toString().split('').reduce((acc, a, i) => acc + Math.pow(+a, p+i), 0) / n
    return Number.isInteger(k) ? k : -1
}

// Test
let x = digPow(46288, 3)
console.log(x) // 51