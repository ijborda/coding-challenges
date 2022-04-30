// Highest and Lowest

function highAndLow(numbers){
    let sorted = numbers.split(' ').sort((a, b) => a - b)
    return `${sorted[sorted.length - 1]} ${sorted[0]}`
}

// Test
let x = highAndLow("1 2 -3 4 5")
console.log(x) // "5 -3"