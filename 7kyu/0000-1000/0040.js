// Number-Star ladder

function pattern(n){
    return Array.from(new Array(n), (_, i) => i + 1)
        .map((a, i) => 1 + "*".repeat(i) + (i === 0 ? "" : a))
        .join("\n")
}

// Test
let x = pattern(10)
console.log(x)