// Highest Rank Number in an Array

function highestRank(arr){
    let freq  = arr.reduce((acc, a) => {
                    if (a in acc) {
                        acc[a] += 1
                    } else {
                        acc[a] = 1
                    }
                    return acc
                }, {})
    let max = Math.max(...Object.values(freq))
    return Math.max(...Object.keys(freq).filter(a => freq[a] === max))
}

// Test
let x = highestRank([12, 10, 8, 12, 7, 6, 4, 10, 12])
console.log(x) // 12