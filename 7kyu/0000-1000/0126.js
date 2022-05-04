// Identical Elements

function duplicateElements(m, n) {
    return m.some(a => n.includes(a));
}

// Test
let x = duplicateElements([1, 2, 3, 4, 5], [1, 6, 7, 8, 9])
console.log(x) // True