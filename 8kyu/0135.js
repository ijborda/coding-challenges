// Is there a vowel in there?

function isVow(a){
    const vowelAscii = {
      "97":   "a",
      "101":  "e",
      "105":  "i",
      "111":  "o",
      "117":  "u"
    }
    return a.map( num => String(num) in vowelAscii ? vowelAscii[String(num)] : num ) 
}