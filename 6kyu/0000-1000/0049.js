// Reverse every other word in the string

function reverse(str){
    return str.split(' ').map((a, i) => i % 2 !== 0 ? a.split('').reverse().join('') : a).join(' ').trim()
}

// Test
let x = reverse("   ")
console.log(x) // "Reverse siht string, !esaelp")