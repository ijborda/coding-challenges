// Find the first non-consecutive number

function firstNonConsecutive (arr) {
    return arr.filter( (num, i, arr) => arr[i] - arr[i-1] !== 1 )[1] ?? null
}