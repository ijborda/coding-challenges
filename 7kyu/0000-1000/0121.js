// Battle of the characters (Medium)

function battle(x, y) {
    return totalPow(x) > totalPow(y) ? x : 
           totalPow(y) > totalPow(x) ? y : 'Tie!'
}

function totalPow(str) {
    return str.split('').map(a => calcPow(a)).reduce((sum, a) => sum + a, 0)
}

function calcPow(c) {
    let ascii = c.charCodeAt()
    return ascii >= 65 && ascii <= 90 ? ascii % 65 + 1: (ascii % 97 + 1) / 2
}

// Test
let x = battle("Foo", "BAR")
console.log(x) // Tie!