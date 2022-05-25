// Difference between biggest 2 numbers

function diffBig2(arr) {
    let max1 = Math.max(...arr)
    let max2 = Math.max(...removeInd(arr, arr.indexOf(max1)))
    return max1 - max2
}

function removeInd(arr, i) {
    return arr.slice(0, i).concat(arr.slice(i + 1))
}

// Test
let x = diffBig2([ 100, 100, 99, 81 ])
console.log(x) // 5