// Consecutive Differences

function differences(a) {
    if (a.length === 1) return a[0]
    return differences(a.map( (a, i, arr) => i === 0 ? 0 : Math.abs(a - arr[i - 1])).slice(1));
}

// Test
let x = differences([1,5,2,7,8,9,0])
console.log(x) // 1