// Srot the inner ctonnet in dsnnieedcg oredr

function sortTheInnerContent(words) {
  return words.split(' ')
              .map((word) => {
                if (word.length <= 2) return word
                let arr = word.split('')
                let start = arr[0]
                let end = arr[arr.length - 1]
                let inner = arr.slice(1, -1).sort((a, b) => b.localeCompare(a)).join('')
                return start + inner + end
              })
              .join(' ')
}

// Test
let x = sortTheInnerContent("sort the inner content in descending order")
console.log(x) // "srot the inner ctonnet in dsnnieedcg oredr"

let y = sortTheInnerContent("e hlcsxknpc zfk gegltmx hij vhfdhhnhfx")
console.log(y) // e hxspnlkcc zfk gtmlgex hij vnhhhhffdx