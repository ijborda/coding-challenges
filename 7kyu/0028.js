// Thinkful - List Drills: Longest word

function longest(words) {
    return Math.max(...words.map(a => a.length))
}

// Test
let x = longest(['simple', 'is', 'better', 'than', 'complex'])
console.log(x)