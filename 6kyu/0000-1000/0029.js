// Two Sum

function twoSum(numbers, target) {
    let ind = []
    numbers.forEach((a, i) => {
        numbers.forEach((b, j) => {
            if (i !== j && a + b === target) {
                ind = [i, j]
            }
        })
    })
    return ind
}

// Test
let x = twoSum([1234,5678,9012], 14690)
console.log(x) // [2,1]