// Sort with a sorting array

function sort(initialArray, sortingArray) {
    let arr = initialArray.slice() 
    return initialArray.sort( (a, b) => {
        let aInd = arr.indexOf(a)
        let bInd = arr.indexOf(b)
        return sortingArray[aInd] - sortingArray[bInd]
    })
}

// Test
initialArray = [ 'g', 'h', 'a', 'c', 'e', 'd', 'f', 'b' ]
sortingArray = [ 0, 2, 3, 4, 5, 7, 6, 1 ]
let x = sort(initialArray, sortingArray) 
console.log(x) // [ 'g', 'b', 'h', 'a', 'c', 'e', 'f', 'd' ]


// Does not work for CW's version of node, but works on v16.14.2
// function sort(initialArray, sortingArray) {
//     return initialArray.sort( (a, b) => {
//         let aInd = initialArray.indexOf(a)
//         let bInd = initialArray.indexOf(b)
//         console.log(aInd, bInd, sortingArray[aInd] - sortingArray[bInd])
//         return sortingArray[aInd] - sortingArray[bInd]
//     })
// }