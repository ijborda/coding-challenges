// Simple Encryption #1 - Alternating Split

function encrypt(text, n) {
    if (text === null) return text
    for (let i = 0; i < n; i++) {
        text = text.split('').filter((_, i) => i % 2 !== 0).join('') + text.split('').filter((_, i) => i % 2 === 0).join('')
    }
    return text
}

function decrypt(encryptedText, n) {
    if (encryptedText === null) return encryptedText
    for (let i = 0; i < n; i++) {
        let sub1 = encryptedText.slice(0, Math.floor(encryptedText.length / 2))
        let sub2 = encryptedText.slice(Math.floor(encryptedText.length / 2))
        encryptedText = sub2.split('').map((a, i) => a + (sub1[i]||'')).join('')
    }
    return encryptedText
}

// Test
let x = encrypt("This is a test!", 2)
console.log(x) // "hsi  etTi sats!"

let y = decrypt("s eT ashi tist!", 2)
console.log(y) // "This is a test!"