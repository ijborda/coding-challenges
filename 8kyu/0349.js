// Stringy Strings

function stringy(size) {
    return Array.from(new Array(size)).fill(1).map( (_, i) => i % 2 !== 0 ? 0 : 1).join("")  
}