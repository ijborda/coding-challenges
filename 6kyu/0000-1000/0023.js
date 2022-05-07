// Does my number look big in this?

function narcissistic(value) {
    let len = value.toString().length
    return value.toString().split('').map(a => Math.pow(+a, len)).reduce((acc, a) => acc + a, 0) === value
}

// Test
let x = narcissistic( 153 )
console.log(x) // True
  
  