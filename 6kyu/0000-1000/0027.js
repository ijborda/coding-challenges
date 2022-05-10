// CamelCase Method

String.prototype.camelCase = function(){
    if (this.length === 0) return this.trim()
    return this.trim()
                .split(' ')
                .map(a => (a[0].toUpperCase() + a.slice(1).toLowerCase()))
                .join('')
}

// Test
let x = "".camelCase(" camel case word")
console.log(x) // "CamelCaseWord"