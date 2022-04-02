// Wilson primes

function amIWilson(p) {
    let factorialTerm = Array.from( new Array(p-1), (_, i) => 1 + i ).reduce( (a, b) => a*b, 1 )
    return !(((factorialTerm) + 1) / (p * p) % 1)
}