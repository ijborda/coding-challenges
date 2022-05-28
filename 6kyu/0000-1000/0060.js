// Count the smiley faces!

function countSmileys(arr) {
  return arr.filter(a => /^[\:\;][\~\-]?[D\)]$/.test(a)).length
}

// Test
let x = countSmileys([':)',':(',':D',':O',':;'])
console.log(x) // 2