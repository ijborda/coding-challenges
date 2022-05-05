// Minimum Steps (Array Series #6)

function minimumSteps(numbers, value){
    let sorted = numbers.sort((a, b) => a - b)
    let ans = 0
    while (value > 0) {
        value -= sorted[ans]
        ans += 1
    }
    return ans - 1
}

// Test
let x = minimumSteps([4,6,3], 2)
console.log(x) // 0

// Interesting solution
// function minimumSteps(numbers, value){
//     return numbers.sort((a, b) => a - b).filter(a => (value -= a) > 0)
// }