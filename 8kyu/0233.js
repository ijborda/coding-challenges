// Enumerable Magic #1 - True for All?

function all( arr, fun ){
    return all.length === 0 ? true : arr.every(fun)
}