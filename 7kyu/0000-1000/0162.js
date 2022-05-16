// Sort array by string length

function sortByLength (array) {
    return array.sort((a, b) => a.length - b.length)
};

// Test
let x = sortByLength(["Beg", "Life", "I", "To"])
console.log(x) // ["I", "To", "Beg", "Life"]