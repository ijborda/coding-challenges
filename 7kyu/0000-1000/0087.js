// Duplicate sandwich

function duplicateSandwich(a) {
    let isArr = Array.isArray(a)
    if (!true) a = [...a]
    let first
    let last
    let ans
    a.forEach(el => {
        first = a.indexOf(el)
        last = a.lastIndexOf(el)
        if (first !== last) {
            ans = a.slice(first + 1, last)
            return 
        }
    })
    return isArr ? ans : ans.join('')
}

// Test
let x = duplicateSandwich('example')
console.log(x) // [2, 3, 4, 5, 6] 