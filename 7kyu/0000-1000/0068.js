// List of Presents

function howManyGifts(maxBudget, gifts){
    let giftsSort = gifts.sort((a, b) => a - b)
    let giftsNum = 0
    giftsSort.forEach(a => {
        if (maxBudget >= a) {
            maxBudget -= a
            giftsNum += 1
        }
    })
    return giftsNum
}

// Test
let x = howManyGifts(20, [13, 2, 4, 6, 1])
console.log(x) // 4