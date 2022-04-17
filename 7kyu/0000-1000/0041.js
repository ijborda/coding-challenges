// nth Floyd line

function nthFloyd(n){
    let i = 0
    while (n > 0) {
        i += 1
        n -= i
    }
    return i
}

// Test
/*
1
2  3
4  5  6
7  8  9  10
11 12 13 14 15
16 17 18 19 20 21
*/
let x = nthFloyd(212)
console.log(x)