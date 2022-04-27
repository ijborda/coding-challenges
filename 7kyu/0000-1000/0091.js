// Jaden Casing Strings

String.prototype.toJadenCase = function () {
    return this.split(' ').map(a => a[0].toUpperCase() + a.slice(1).toLowerCase()).join(' ')
};

// Test
var str = "How can mirrors be real if our eyes aren't real"
let x = str.toJadenCase()
console.log(x)