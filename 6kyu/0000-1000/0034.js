// WeIrD StRiNg CaSe

function toWeirdCase(string){
    return string.split(' ').map(word => word.split('').map((a, i) => {
        return i % 2 === 0 ? a.toUpperCase() : a.toLowerCase()
    }).join('')).join(' ')
}

// Test
let x = toWeirdCase('This is a test')
console.log(x) // 'ThIs Is A TeSt'