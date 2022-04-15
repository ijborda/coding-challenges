// ATM

function solve(n) {
    let bills = [500, 200, 100, 50, 20, 10]
    let notesCount = 0
    let i = 0
    while (n > 0 && i < bills.length) {
        while (n >= bills[i]) {
            n -= bills[i]
            notesCount += 1
        }
        i += 1
    }
    // Edge case for exact bills
    i = n === 0 ? i - 1 : i 
    // Return
    return n < 0 || i >= bills.length ? -1 : notesCount
}

// Test
let x = solve(125)
console.log(x)