// Friend or Foe?

function friend(friends){
    return friends.filter(a => a.length === 4)
}

// Test
let x = friend(["Ryan", "Kieran", "Mark"])
console.log(x) // ["Ryan", "Mark"]