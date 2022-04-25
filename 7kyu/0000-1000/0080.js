// Credit Card Mask

function maskify(cc) {
    return cc.split('').reverse().map((a, i) => i >= 4 ? '#' : a).reverse().join('')
}

// Test
let x = maskify('4556364607935616')
console.log(x) // '############5616'