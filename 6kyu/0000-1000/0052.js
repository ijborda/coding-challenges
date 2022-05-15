// Difference of 2

function twosDifference(input){
    let pairs = []
    input.forEach((a, i) => {
        input.forEach((b, j) => {
            if (a - b === 2) {
                if (a < b) {
                    pairs.push([a, b])
                } else {
                    pairs.push([b, a])
                }
            }
        })
    })
    return pairs.sort((a, b) => a[0] - b[0])
}

// Test
let x = twosDifference([4, 3, 1, 5, 6])
console.log(x) // [[1, 3], [3, 5], [4, 6]]