// Name on billboard

function billboard(name, price = 30){
    let total = 0
    name.split("").forEach(_ => total += price)
    return total
} 