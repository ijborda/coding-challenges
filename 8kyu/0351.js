// CSV representation of array

function toCsvText(array) {
    return array.map(a => a.join(',')).join('\n')
}