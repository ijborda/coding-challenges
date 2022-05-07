// Find The Parity Outlier

function findOutlier(integers){
    let parity = integers.reduce((par, a) => {
        if (a % 2 === 0) {
            par.even += 1
        } else {
            par.odd += 1
        }
        return par
    }, {odd: 0, even: 0})
    if (parity.even  === 1) {
        return +integers.filter(a => a % 2 === 0)[0]
    } else {
        return +integers.filter(a => a % 2 !== 0)[0]
    }
}

// Test
let x = findOutlier([0, 1, 2])
console.log(x) // 1