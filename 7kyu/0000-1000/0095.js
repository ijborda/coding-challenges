// Alphabetical Grid

function grid(N) {
    if (N < 0) return null
    let gridAlphabet = []
    for (let i = 0; i < N; i++) {
        gridAlphabet.push( Array.from(new Array(N), (_, ind) => String.fromCharCode(((ind + i) % 26) + 97)).join(' ') )
    }
    return gridAlphabet.join('\n')
}

let x = grid(2)
console.log(x)
// a b\nb c'