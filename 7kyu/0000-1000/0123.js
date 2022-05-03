// Least Larger

function leastLarger(arr,i) {
    return arr.indexOf( Math.min(...arr.filter(a => a > arr[i])) );
}

// Test
let x = leastLarger( [4, 1, 3, 5, 6], 0 )
console.log(x) // 3