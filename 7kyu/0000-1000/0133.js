// L2: Triple X

function tripleX(str){
    if (str.match(/x/) === null) return false
    let i = str.match(/x/).index
    return 'xxx' === str.slice(i, i + 3)
}

// Test
let x = tripleX("kittykittywarmwarm") 
console.log(x) // True
let y = tripleX("softx kitty, warm kitty, xxxxx")
console.log(y) // False
let z = tripleX("soft kitty, warm kitty, xxxxx")
console.log(z) // True