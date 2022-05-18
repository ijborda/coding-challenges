// max diff - easy

function maxDiff(list) {
    if (list.length < 2) return 0
    let max = Math.max(...list)
    let min = Math.min(...list)
    return max - min;
};

// Test
let x = maxDiff([0, 1, 2, 3, 4, 5, 6])
console.log(x) // 6