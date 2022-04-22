// Frank's Sticky Calculator

function stickyCalc (operation, val1, val2){
    let a = +(Math.round(val1).toString() + Math.round(val2).toString())
    return Math.round({
        "+": a + Math.round(val2), 
        "-": a - Math.round(val2), 
        "*": a * Math.round(val2), 
        "/": a / Math.round(val2), 
    }[operation])
}

// Test
let x = stickyCalc('/', 12.1, 6.8)
console.log(x) // 18