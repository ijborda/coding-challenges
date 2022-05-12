// Fold an array

function foldArray(array, runs) {
    for (let i = 0; i < runs; i++) {
        let mid = Math.round(array.length / 2)
        let arr =  [...array]
        array = array.slice(0, mid).map((a, i) => {
            if (i === mid - 1) {
                return arr.length % 2 === 0 ? a + arr[arr.length - i - 1] : a
            } else {
                return a + arr[arr.length - i - 1]
            }
        })
    } 
  return array
}

// Test
let x = foldArray([1, 2, 3, 4, 5], 3)
console.log(x) // [9,6]