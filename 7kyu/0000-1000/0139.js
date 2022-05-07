// Sum of integers in string

function sumOfIntegersInString(s){
    return s.split(/[^\d]/).map(Number).reduce((sum, a) => sum + a, 0)
}

// Test
let x = sumOfIntegersInString("The Great Depression lasted from 1929 to 1939.")
console.log(x) // 3868