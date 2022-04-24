// Pull your words together, man!

function sentencify(words) {
    words[0] = words[0][0].toUpperCase() + words[0].slice(1)
    words[words.length - 1] += '.'
    return words.join(' ')
}
  
// Test
let x = sentencify(["i", "am", "an", "AI"])
console.log(x) // "I am an AI."  