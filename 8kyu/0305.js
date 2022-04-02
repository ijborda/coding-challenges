// Improving Math.round(x)

Math.roundTo = function (number, precision) {
    return +number.toFixed(precision)
}