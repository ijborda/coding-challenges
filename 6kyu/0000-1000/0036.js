// Find the missing term in an Arithmetic Progression

var findMissing = function (list) {  
    let diff = findDiff(list)
    let missing = undefined
    list.every((a, i, arr) => {
        if ( (arr[i + 1] - a) !== diff ) {
            missing = a + diff
            return false
        }
        return true
    })
    return missing
}

function findDiff(arr) {
    freq = arr.map((a, i, arr) => arr[i+1] - a).slice(0, -1).reduce((acc, a) => {
        a in acc ? acc[a] += 1 : acc[a] = 1
        return acc
    }, {})
    return arr.length !== 3 ? +Object.keys(freq).find(a => freq[a] !== 1) : Object.keys(freq).map(Number).sort((a, b) => Math.abs(a) - Math.abs(b))[0]
}

// Test
let x = findMissing([ -2, -4, -5 ])
console.log(x) // 7