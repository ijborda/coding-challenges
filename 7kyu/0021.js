// Filter unused digits

function unusedDigits(...arr) {
    let digitsUsed = [...new Set(arr.join('').split('').map(a => +a))]
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].filter(a => !digitsUsed.includes(a)).join('')     
}