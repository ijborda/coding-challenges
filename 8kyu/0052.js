// What is between?

function between(a, b) {
    return [...Array(b - a)].reduce( (arr, num) => [...arr, arr[arr.length - 1] + 1], [a])
}