// Most digits

function findLongest(array){
    return array.reduce((currentMax, num) => String(currentMax).length < String(num).length ? num : currentMax, 0)
}