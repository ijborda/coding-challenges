// Sums of Parts

function partsSums(ls) {
    let sum = ls.reduce((acc, a) => a + acc, 0)
    return ls.reduce((acc, a) => {
        acc.push(acc[acc.length - 1] - a)
        return acc
    }, [sum])
}

// Test
let x = partsSums([0, 1, 3, 6, 10])
console.log(x) // [20, 20, 19, 16, 10, 0]

// Refactor
function partsSums(ls) {
    let sum = ls.reduce((acc, a) => a + acc, 0)
    ls.unshift(sum)
    return ls.map(a => sum -= a)
}