// Polish alphabet

function correctPolishLetters (string) {
    let polish = {
      ą: "a",
      ć: "c",
      ę: "e",
      ł: "l",
      ń: "n",
      ó: "o",
      ś: "s",
      ź: "z",
      ż: "z"
    }
    return string.replace(/[^\w]/g, c => c in polish ? polish[c] : c  )
}