// Power

function numberToPower(number, power){
    let ans = 1
    while (power > 0) {
      ans *= number
      power--
    }
    return ans
}