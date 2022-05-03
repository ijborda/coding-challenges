// Multiples and Digit Sums

function procedure(n){
    return Array.from( new Array(Math.floor(100/n)), (_,i)=>((i+1)*n).toString() )
        .map(a => a.length === 1 ? +a : +a[0] + +a[1])
        .reduce((sum, a) => sum + a, 0)
}

// Test
let x = procedure(1)
console.log(x) // 25