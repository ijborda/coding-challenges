// Adding remainders to a list

function solve(nums, div) {
    return nums.map( a => a + a % div)
}

// Test
let x = solve([2, 7, 5, 9, 100, 34, 32, 0], 3)
console.log(x) // [4, 8, 7, 9, 101, 35, 34, 0] 