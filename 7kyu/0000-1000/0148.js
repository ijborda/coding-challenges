// Integer Difference

const intDiff = (arr, n) => {
    let pairsNum = 0
    arr.forEach((a, i) => {
        arr.forEach((b, j) => {
            if (i !== j && Math.abs(a - b) === n) {
                pairsNum += 1
            }
        })
    })
    return pairsNum / 2
}

// Test
let x = intDiff([1, 1, 5, 6, 9, 16, 27], 4)
console.log(x) // 3