// Digits explosion

function explode(s) {
    return s.split('').map(a => a.repeat(+a)).join('');
}

// Test
let x = explode("312")
console.log(x) // "333122"