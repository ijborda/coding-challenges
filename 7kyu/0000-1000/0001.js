// Mumbling

function accum(s) {
    let letters = s.toLowerCase().split("")
    let lettersNumber = letters.length
    let output = ""
    
    for (let i = 0; i < lettersNumber; i++) {     
      for (let j = 0; j < i+1; j++) {
        j == 0 ? output += letters[i].toUpperCase() : output += letters[i]
      }
      if (i != lettersNumber - 1) {
        output += "-"
      }
    }
    
    return(output)
}