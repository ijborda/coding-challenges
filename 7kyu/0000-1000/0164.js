// Alternate capitalization

function capitalize(s){
    let s1 = s.split('').map((a, i) => i % 2 === 0 ? a.toLowerCase() : a.toUpperCase()).join('')
    let s2 = s.split('').map((a, i) => i % 2 !== 0 ? a.toLowerCase() : a.toUpperCase()).join('')
    return [s2, s1];
};

// Test
let x = capitalize("abcdef")
console.log(x) // ['AbCdEf', 'aBcDeF']