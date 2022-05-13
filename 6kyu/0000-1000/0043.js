// Word a10n (abbreviation)

function abbreviate(string) {
    return string.replace(/\w+/g, a => a.length < 4 ? a : a[0] + (a.length - 2) + a[a.length - 1])
}

// Test
let x = abbreviate("elephant-rides are really fun!")
console.log(x) // "e6t-r3s are r4y fun!"