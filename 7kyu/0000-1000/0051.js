// Sort Numbers

function solution(nums){
    return nums === null ? [] : nums.sort((a, b) => a - b)
}

// Test
let x = solution([1, 2, 10, 50, 5])
console.log(x) // should return [1,2,5,10,50]