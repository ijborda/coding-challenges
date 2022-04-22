// Simple Interest and Compound Interest

function interest(p, r, n) {
    let simple = Math.round(p * (1 + r * n))
    let compound = Math.round(p * Math.pow(1 + r, n))
    return [simple, compound]
}

// Test
let x = interest(100, 0.1, 10)
console.log(x) // [200, 259]