// Square(n) Sum

function squareSum(numbers){
    return numbers.reduce( (sumSquare, num) => sumSquare + Math.pow(num, 2), 0 )
}