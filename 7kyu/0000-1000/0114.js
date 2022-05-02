// sPoNgEbOb MeMe

function spongeMeme(sentence) {
    return sentence.split('').map( (a, i) => i % 2 === 0 ? a.toUpperCase() : a.toLowerCase() ).join('')
}

// Test
let x = spongeMeme("stop Making spongebob Memes!")
console.log(x) // 'StOp mAkInG SpOnGeBoB MeMeS!'