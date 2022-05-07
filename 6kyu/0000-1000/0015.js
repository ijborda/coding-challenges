// Counting Duplicates

function duplicateCount(text){
    let freq = text.toLowerCase().split('').reduce((acc, a) => {
        a in acc ? acc[a] += 1 : acc[a] = 1
        return acc
    }, {})
    return Object.values(freq).filter(a => a > 1).length
}

// Test
let x = duplicateCount("Indivisibility")
console.log(x) // 1