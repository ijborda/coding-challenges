// Responsible Drinking

function hydrate(s) {
    let water = s.replace(/[^\d ]/g, '').split(' ').filter(a => a).reduce((acc, a) => acc + +a, 0)
    return `${water} ${water > 1 ? 'glasses' : 'glass'} of water`
}

// Test
let x = hydrate("11 shot, 5 beers, 2 shots, 1 glass of wine, 1 beer")
console.log(x) // "20 glasses of water"