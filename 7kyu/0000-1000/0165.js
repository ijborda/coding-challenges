// Remove anchor from URL

function removeUrlAnchor(url){
    return url.split('#')[0]
}

// Test
let x = removeUrlAnchor('www.codewars.com#about')
console.log(x) // www.codewars.com