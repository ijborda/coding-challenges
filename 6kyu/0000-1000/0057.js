// +1 Array

function upArray(arr){
    if (arr.some(a => a < 0)) return null
    let ans = arr.reverse()
    return ans.reduce((acc, a) => {
        let i = ans.findIndex(b => b.toString().length > 1)
        console.log(acc, i)
        acc[i] = 0
        acc[i+1] += 1
        return acc
    }, ans).reverse()
}

// Test
let x = upArray([2,9,9])
console.log(x) // [2,4,0]