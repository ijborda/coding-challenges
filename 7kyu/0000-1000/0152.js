// Get the Middle Character

function getMiddle(s) {
    return s.split('')
            .filter((_, i) => {
                if (s.length % 2 !== 0) {
                    return i === Math.floor(s.length / 2)
                } else {
                    return i === Math.floor(s.length / 2) || i === Math.ceil(s.length / 2) - 1
                }
            }).join('')
}

// Test
let x = getMiddle("oossoo")
console.log(x) // es