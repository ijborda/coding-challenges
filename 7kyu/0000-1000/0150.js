// Thinkful - List and Loop Drills: Inverse Slicer

function inverseSlice(items, a, b) {
    return items.slice(0, a).concat(items.slice(b));
}

// Test
let x = inverseSlice([12, 14, 63, 72, 55, 24], 2, 4)
console.log(x) // [12, 14, 55, 24]