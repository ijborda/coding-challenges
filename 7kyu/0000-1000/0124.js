// Array Leaders (Array Series #3)

function arrayLeaders(numbers){
    return numbers.filter( (a, i, arr) => a > arr.slice(i + 1).reduce((sum, x) => sum + x, 0) );
}

// Test
let x = arrayLeaders([1,2,3,4,0])
console.log(x) // 4