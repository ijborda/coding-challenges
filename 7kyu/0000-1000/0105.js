// Scoring Tests

function scoreTest(str, right, omit, wrong){
    return str.map(a => a === 0 ? right : a === 1 ? omit : -wrong).reduce((acc, a) => acc + a, 0)
}

// Test
let x = scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2)
console.log(x) // 3