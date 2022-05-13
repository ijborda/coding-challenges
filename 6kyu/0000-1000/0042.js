// Array Helpers

Array.prototype.square = function() {
    return this.map(a => a**2)
}

Array.prototype.cube = function() {
    return this.map(a => a**3)
}

Array.prototype.sum = function() {
    return this.reduce((acc, a) => acc + a, 0)
}

Array.prototype.average = function() {
    return this.sum() / this.length
}

Array.prototype.even = function() {
    return this.filter(a => a % 2 === 0)
}

Array.prototype.odd = function() {
    return this.filter(a => a % 2 !== 0)
}

// Test
let x = [1, 2, 3, 4, 5].square() 
console.log(x) // [1, 4, 9, 16, 25]