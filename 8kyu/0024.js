// Counting sheep...

function countSheeps(arrayOfSheep) {
    return arrayOfSheep.reduce ( (sum, bool) => bool ? sum += 1 : sum += 0, 0 )
}