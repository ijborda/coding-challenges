// Be Concise II - I Need Squares

function squaresOnly(arr) {
    return arr.filter( a => Number.isInteger(Math.sqrt(a)) )
}