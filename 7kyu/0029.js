// String Merge!

function stringMerge(string1, string2, letter){
    let part1 = string1.slice(0, string1.indexOf(letter)) 
    let part2 = string2.slice(string2.indexOf(letter)) 
    return part1 + part2
}

// Test
let x = stringMerge("wonderful", "people", "e")
console.log(x)