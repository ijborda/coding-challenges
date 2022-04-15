// Sort the odd

function sortArray(array) {
    let arrOddSort = array.filter( num => num % 2 !== 0).sort( (a,b) => a - b)
    return array.map( (num, index) => num % 2 ? arrOddSort.shift() : num )
}