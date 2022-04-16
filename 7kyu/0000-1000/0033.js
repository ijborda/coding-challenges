// Sum of numerous arguments

function findSum(...args){
    let isNeg = false
    let ans = args.reduce((sum, a) => {
        if (a < 0) {
            isNeg = true
        } else {
            return sum + a
        }
    }, 0)
    return isNeg ? -1 : ans
}

// Test
let x = findSum(1,3,5, -1)
console.log(x)