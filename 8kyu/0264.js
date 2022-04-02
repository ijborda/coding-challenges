// Count words

function countWords(str) {
    console.log(str)
    return str.trim().split(/\s+/).filter(a => a).length
}