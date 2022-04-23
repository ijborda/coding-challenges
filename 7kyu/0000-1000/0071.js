// Simple equation reversal

function solve(eq){
    let terms = eq.split(/[\+\-\*\/]/g).filter(a => a).reverse()
    let ops = eq.split(/[^\+\-\*\/]*/g).filter(a => a).reverse()
    return terms.map((a, i) => i === 0 ? a : ops[i - 1] + a).join('')
}

// Test
let x = solve("100*b/y")
console.log(x) // "y/b*100"