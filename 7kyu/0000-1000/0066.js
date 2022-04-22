// Thinking & Testing : How many "word"?

function testit(s){
    let match = 0
    let find = ["w", "o", "r", "d"]
    let i = 0;
    s.toLowerCase().split('').forEach(a => {
        if (find[i] === a) {
            i += 1
        }
        if ( i === find.length) {
            match += 1
            i = 0
        }
    })
    return match
}

// Test
let x = testit("One word + one word = three word ;-)")
console.log(x)