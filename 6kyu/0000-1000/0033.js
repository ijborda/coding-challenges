// Good vs Evil

function goodVsEvil(good, evil){
    let goodWorth = [1, 2, 3, 3, 4, 10]
    let evilWorth = [1, 2, 2, 2, 3, 5, 10]
    return calcWorth(good, goodWorth) > calcWorth(evil, evilWorth) ? 'Battle Result: Good triumphs over Evil' :
           calcWorth(good, goodWorth) < calcWorth(evil, evilWorth) ? 'Battle Result: Evil eradicates all trace of Good' : 'Battle Result: No victor on this battle field'
}

function calcWorth(str, worth) {
    return str.split(' ').reduce((acc, a, i) => acc + +a * worth[i], 0)
}

// Test
let x = goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1')
console.log(x) // 'Battle Result: Evil eradicates all trace of Good'