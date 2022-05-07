// Largest pair sum in array

function largestPairSum (numbers) {
    return numbers.sort((a, b) => b - a)[0] + numbers.sort((a, b) => b - a)[1]
}

// Test 
let x = largestPairSum([1,2,3,4,6,-1,2])
console.log(x) // 10 