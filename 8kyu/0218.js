// Sum of differences in array

function sumOfDifferences(arr) {
    return arr.length <= 1 ? 0 : arr.sort((a, b) => b - a)
                                    .reduce((ans, x, i, a) => i >= 1 ? ans += a[i-1] - a[i] : ans += 0, 0)
}
  