// All Star Code Challenge #18

function strCount(str, letter){  
    return str.split("").reduce( (sum, a) => a === letter ? sum += 1 : sum += 0, 0 )
}
  