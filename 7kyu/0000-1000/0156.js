// Testing 1-2-3

var number = function(array){
    return array.map((a, i) => `${i + 1}: ${a}`)
}

// Test
let x = number(["a", "b", "c"])
console.log(x) // ["1: a", "2: b", "3: c"]