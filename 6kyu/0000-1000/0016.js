// Persistent Bugger.

function persistence(num) {
    let per = 0
    while (num.toString().length !== 1) {
        num = num.toString().split('').reduce((acc, x) => acc * x, 1)
        per += 1
    }
    return per
}

// Test
let x = persistence(999)
console.log(x) // 3