// Highest Scoring Word

function high(x){
    let max = x.split(' ').map(a => a.split('').reduce((sum, let) => sum + let.charCodeAt() - 96, 0))
    return x.split(' ')[max.indexOf(Math.max(...max))]
}

// Test
let x = high('man i need a taxi up to ubud')
console.log(x) // 'taxi'