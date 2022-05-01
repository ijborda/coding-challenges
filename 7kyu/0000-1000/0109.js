// How many are smaller than me?

function smaller(nums) {
    return nums.map( (a, i, arr) => arr.slice(i).filter(b => b < a).length )
}

// Test
let x = smaller([5, 4, 3, 2, 1])
console.log(x) // [4, 3, 2, 1, 0]