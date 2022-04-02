// Return Two Highest Values in List

function twoHighest(arr) {
    return [...new Set(arr)].sort( (a, b) => b - a ).slice(0, 2)
}