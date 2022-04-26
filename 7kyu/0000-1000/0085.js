// Four/Seven

function fourSeven(n){
    return +(Math.abs((-n + 11)).toString().replace(/[01235689]*/, 0)) 
    // +(Math.abs((-n + 11)).toString().replace(/[^4][^7]/, 0))
}

let x = fourSeven(447)
console.log(x) // 7