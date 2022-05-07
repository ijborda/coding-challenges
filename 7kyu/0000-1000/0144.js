// What comes after?

function comes_after(str,l) {
    return str.split('')
              .filter( (a, i, arr) => /[a-zA-Z]/.test(a) && (arr[i - 1] === l.toUpperCase() || arr[i - 1] === l.toLowerCase()) )
              .join('')
}

// Test
let x = comes_after("are you really learning Ruby?",'r')
console.log(x) // 'eenu'