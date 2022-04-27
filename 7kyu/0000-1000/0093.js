// Speed Control

function gps(s, x) {
    if (x.length <= 1) return 0
    return Math.max(...x.map( (a, i, arr) => i === 0 ? 0 : Math.abs(a - arr[i - 1]) )
        .slice(1)
        .map( a => (3600 * a) / s))
}

// Test
let x = gps(20, [ 0, 0.23, 0.46, 0.69, 0.92, 1.15, 1.38, 1.61 ] )
console.log(x) // 41