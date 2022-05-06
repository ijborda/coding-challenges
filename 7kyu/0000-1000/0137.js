// Remove consecutive duplicate words

const removeConsecutiveDuplicates = s => {
    return s.split(' ').filter((a, i, arr) => a !== arr[i + 1]).join(' ')
}

// Test
let x = removeConsecutiveDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta')
console.log(x) // 'alpha beta gamma delta alpha beta gamma delta'