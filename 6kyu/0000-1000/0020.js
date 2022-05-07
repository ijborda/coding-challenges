// Find the unique number

function findUniq(arr) {
    let count = arr.reduce((acc, a) => {
        if (a in acc) {
            acc[a] += 1
        } else {
            acc[a] = 1
        }
        return acc
    }, {})
    return +Object.keys(count).find(a => count[a] === 1)
}

// Test 
let x = findUniq([ 1, 0, 0 ])
console.log(x) // 1