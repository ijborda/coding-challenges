// They say that only the name is long enough to attract attention. They also said that only a simple Kata will have someone to solve it. This is a sadly story #1: Are they opposite?

function isOpposite(s1, s2){
    return [...s1].map(a => a === a.toUpperCase() ? a.toLowerCase() : a.toUpperCase())
      .join('') === s2 && s1 !== ''
}