// Remove the minimum

function removeSmallest(numbers) {
    let ind = numbers.indexOf(Math.min(...numbers))
    return numbers.filter((a, i) => i !== ind)
}

// Test
let x = removeSmallest([1, 2, 3, 4, 5])
console.log(x) // [2, 3, 4, 5]