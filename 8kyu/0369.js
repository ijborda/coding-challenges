// Coding 3min : Jumping Dutch act

function sc(floor){
    if (floor <= 1) return ''
    let scream = Array.from(new Array(floor))
      .map((a, i, arr) => i !== arr.length - 1 ? 'Aa~' : 'Pa!')
    if (floor <= 6) scream.push('Aa!') 
    return scream.join(' ')
}