// Compare within margin

function closeCompare(a, b, margin = 0){
    return Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1
}