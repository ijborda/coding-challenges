// Ones' Complement

function onesComplement(n) {
    return n.replace(/[01]/g, a => a === '0' ? '1' : '0')
};

// Test
let x = onesComplement("1101")
console.log(x) // 0010