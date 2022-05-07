// Separating Strings

function sepStr(str) {
    let sep = []
    let height = Math.max(...str.split(' ').map(a => a.length))
    for (let i = 0; i < height; i++) {
        let arr = []
        str.split(' ').forEach(a => {
            arr.push(a[i] || '')
        })
        sep.push(arr)
    }
    return sep
}

// Test
let x = sepStr("Just Live Life Man")
console.log(x) 
// [['J','L','L','M']
// ,['u','i','i','a']
// ,['s','v','f','n']
// ,['t','e','e','']]