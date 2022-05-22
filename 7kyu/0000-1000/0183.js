// Keypad horror

function computerToPhone(numbers){
    let keyboard = [0, 7, 8, 9, 4, 5, 6, 1, 2, 3]
    return numbers.split('').map(a => keyboard.indexOf(+a)).join('')
}

// Test
let x = computerToPhone("0789456123")
console.log(x) // 0123456789