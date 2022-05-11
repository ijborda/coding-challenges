// Break camelCase

function solution(string) {
    return string.replace(/[A-Z]/g, a => ' ' + a)
}

// Test
let x = solution('camelCasingTest')
console.log(x) // camel Casing Test