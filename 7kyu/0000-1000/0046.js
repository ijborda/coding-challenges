// Last Survivor

function lastSurvivor(letters, coords) {
    return coords.reduce((ans, i) => ans.slice(0, i) + ans.slice(i + 1), letters)
}

// Test
// let str = "zbk", arr = [0, 1]
//     str = "bk", arr = [1]
//     str = "b", arr = []
//     return 'b'
let x = lastSurvivor('abc', [1, 1])
console.log(x)