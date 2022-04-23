// Battle of the characters (Easy)

function battle(x, y) {
    let xPow = x.split('').reduce((pow, a) => pow + a.charCodeAt() - 64, 0)
    let yPow = y.split('').reduce((pow, a) => pow + a.charCodeAt() - 64, 0)
    return xPow === yPow ? 'Tie!' : xPow > yPow ? x : y
}

// Test
let x = battle("AAA", "Z")
console.log(x) // TWO