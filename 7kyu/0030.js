// Sum up the random string

function sumFromString(str){
    return str.split(/\D/).filter(a => a).reduce( (sum, a) => sum += +a, 0 )
}

// Test
let x = sumFromString("In 2015, I want to know how much does iPhone 6+ cost?")
console.log(x)