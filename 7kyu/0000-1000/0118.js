// Exclamation marks series #9: Remove or add a exclamation mark at the end of words of the sentence

function removeOrAdd(str) {
    return str.split(' ').map(word => {
        if (countExclEnd(word) === 1) {
            return word.slice(0, -1)
        } else if (countExclEnd(word) > 1) {
            return word
        } else {
            return word + '!'
        }
    }).join(' ')
}

function countExclEnd(str) {
    let arr = str.split(/[^!+]/)
    return arr[arr.length - 1].length
}

// Test
let x = removeOrAdd("!Hi! !Hi !Hi!!")
console.log(x) // "!Hi !Hi! !Hi!!"