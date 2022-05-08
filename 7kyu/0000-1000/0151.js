// Square Every Digit

function squareDigits(num){
    return +num.toString().split('').map(a => a ** 2).join('');
}

// Test
let x = squareDigits(3212)
console.log(x) // 9414