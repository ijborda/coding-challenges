// Sum consecutives

function sumConsecutives(s) {
    let ans = []
    for (let i = 0; i < s.length; i++) {
        if (i === 0 || s[i] !== s[i-1]) {
            ans.push(s[i])
        } else {
            ans[ans.length - 1] += s[i]
        }
    }
    return ans
}

// Test
let x = sumConsecutives([1,4,4,4,0,4,3,3,1])
console.log(x) // [1,12,0,4,6,1]