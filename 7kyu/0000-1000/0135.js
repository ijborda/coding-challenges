// Multiplicative Persistence... What's special about 277777788888899?

function per(n) {
    let per = []
    while (n.toString().length !== 1) {
        n = [...n.toString()].reduce((prod, a) => +a * prod, 1)
        per.push(n)
    }
    return per
}

// Test
let x = per(69)
console.log(x) // [54, 20, 0]