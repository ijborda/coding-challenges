// Previous multiple of three

const prevMultOfThree = n => {
    while( !isMult3(n) ) {
        n = Number(String(n).slice(0, -1))
        if (n === 0) return null
    }
    return n
}
const isMult3 = n => {
    return n % 3 === 0
}

// Test
let x = prevMultOfThree(952406)
console.log(x)

// 1      => null
// 25     => null
// 36     => 36
// 1244   => 12
// 952406 => 9