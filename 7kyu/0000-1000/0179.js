// Simple remove duplicates

function solve(arr) {
    return Array.from(new Set(arr.reverse())).reverse();
}

// Test
let x = solve([3,4,4,3,6,3])
console.log(x) // [4,6,3]