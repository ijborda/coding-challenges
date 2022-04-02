// Exclamation marks series #6: Remove n exclamation marks in the sentence from left to right

function remove(s,n){
    let removed = 0
    return s.split("").filter((char, ind) => {
      if (char === "!" && removed < n) {
        removed += 1
        return false
      }
      else {
        return true
      }
    }).join("") 
}