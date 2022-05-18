// CubeSummation

function cubeSum(n, m){
    if (n === m) return 0
    let min = Math.min(m, n)
    let max = Math.max(m, n)
    return Array.from(new Array(max - min), (_, i) => i + min + 1)
                .reduce((acc, a) => acc + Math.pow(a, 3), 0)
}

// Test
let x = cubeSum(4, 0)
console.log(x) // 100