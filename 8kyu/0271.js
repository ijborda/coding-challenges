// Multiply the number

function multiply(number){
    return number * 5**number.toString().replace(/\D/, "").length
}