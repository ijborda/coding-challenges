// To square(root) or not to square(root)

function squareOrSquareRoot(array) {
    return array.map( num => Math.sqrt(num) % 1 === 0 ? Math.sqrt(num) : num ** 2 );  
}