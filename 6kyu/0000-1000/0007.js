// Find the odd int

function findOdd(arr) {
    let occ = arr.reduce((freq, a) => {
        if (a in freq) {
            freq[a] += 1
        } else {
            freq[a] = 1
        }
        return freq
    }, {});
    let odd = Object.values(occ).filter(a => a % 2 !== 0)[0]
    return +Object.keys(occ).find(keys => occ[keys] === odd)
}

// Test
let x = findOdd([20,1,-1,2,-2,3,3,5,5,1,2,4,20,4,-1,-2,5])
console.log(x)