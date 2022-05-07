// JavaScript Array Filter

function getEvenNumbers(numbersArray){
    return numbersArray.filter(a => a % 2 === 0)
}

// Test
let x = getEvenNumbers([1,2,3,6,8,10])
console.log(x) // [2,6,8,10]