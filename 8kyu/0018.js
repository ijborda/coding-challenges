// Sum of positive

function positiveSum(arr) {
    return arr.reduce( (sumPos, num) => num > 0 ? num + sumPos : sumPos, 0 )
}