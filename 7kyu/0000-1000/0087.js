// Duplicate sandwich

function duplicateSandwich(a) {
    let isArr = Array.isArray(a)
    let arr = isArr ? a : [...a]
    let first
    let last
    let ans
    arr.forEach(el => {
        first = arr.indexOf(el)
        last = arr.lastIndexOf(el)
        if (first !== last) {
            ans = arr.slice(first + 1, last)
            return 
        }
    })
    return isArr ? ans : ans.join('')
}

// Test
let x = duplicateSandwich([0, 1, 2, 3, 4, 5, 6, 1, 7, 8])
console.log(x) // [2, 3, 4, 5, 6] 