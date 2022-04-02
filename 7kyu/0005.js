// Sum of two lowest positive integers

function sumTwoSmallestNumbers(numbers) {  
    let lowest = Math.min(...numbers) 
    return lowest + Math.min(...numbers.filter(num => num !== lowest))
}