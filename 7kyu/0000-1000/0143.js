// Double Every Other

function doubleEveryOther(a) {
    return a.map((num, i) => i % 2 !== 0 ? num * 2 : num);
}

// Test
let x = doubleEveryOther([1,2,3,4])
console.log(x) // [1,4,3,8]