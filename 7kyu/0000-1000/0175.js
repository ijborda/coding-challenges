// Letterbox Paint-Squad

var paintLetterboxes = function(start, end) {
    return Array.from(new Array(end - start + 1), (_, i) => i + start)
                .join('')
                .split('')
                .reduce((acc, a) => {
                    acc[a] += 1
                    return acc
                }, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
}
  
// Test
let x = paintLetterboxes(125, 132)
console.log(x) // [1,9,6,3,0,1,1,1,1,1]  