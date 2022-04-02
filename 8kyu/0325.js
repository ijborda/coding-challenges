// Heads and Legs

function animals(heads, legs){
    let cows = (legs - (heads * 2)) / 2
    let chicken = heads - cows
    return Number.isInteger(cows) && Number.isInteger(chicken) && cows >= 0 && chicken >= 0 ? [chicken, cows] : 'No solutions'
}