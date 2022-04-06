// Crash Override

function aliasGen(x, y){
    let a = x[0].toUpperCase()
    let b = y[0].toUpperCase()
    if (/[A-Z]/.test(a) && /[A-Z]/.test(b)) return `${firstName[a]} ${surname[b]}`
    return 'Your name must start with a letter from A - Z.'
}