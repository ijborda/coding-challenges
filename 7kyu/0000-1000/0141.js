// Spoonerize Me

function spoonerize(words) {
    return words.split(' ').map((a, i, arr) => i === 0 ? arr[1][0] + a.slice(1) : arr[0][0] + a.slice(1)).join(' ')
}

// Test
let x = spoonerize("wedding bells")
console.log(x) // "bedding wells"