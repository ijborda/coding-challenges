// Build Tower

function towerBuilder(nFloors) {
    let maxLen = nFloors * 2 - 1
    return Array.from(new Array(nFloors), (_, i) => {
        return ' '.repeat((maxLen - (1 + (i * 2)))/2) + '*'.repeat(1 + (i * 2)) + ' '.repeat((maxLen - (1 + (i * 2)))/2)
    })
}

// Test
let x = towerBuilder(3)
console.log(x) // 
// [
//     "  *  ",
//     " *** ", 
//     "*****"
// ]