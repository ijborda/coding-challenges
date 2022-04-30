// SevenAte9

function sevenAte9(str){
    return str.replace(/(?<=7)9(?=7)/g, '')
}

// Test
let x = sevenAte9('7979797')
console.log(x) // 7777 