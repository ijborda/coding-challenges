// Exclamation marks series #17: Put the exclamation marks and question marks on the balance - are they balanced?

function balance(left,right){
    let total = s => s.split('').reduce((acc, a) => acc + (a === '!' ? 2 : 3), 0)
    return total(left) > total(right) ? 'Left' :
           total(left) < total(right) ? 'Right' : 'Balance'
}

// Test
let x = balance("!!???!????","??!!?!!!!!!!")
console.log(x) // "Balance"

let y = balance("!?!!","?!?")
console.log(y) // "Left"