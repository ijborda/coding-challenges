// Format words into a sentence

function formatWords(words){
  words = (words||[]).filter(a => a);
  if (words.length === 1) {
    return words[0];
  } else if (words.length >= 2) {
    return words.slice(0, -1).join(', ') + ' and ' + words.slice(-1);
  } else {
    return '';
  }
}

// Test
console.log(formatWords(['ninja', 'samurai', 'ronin'])) // "ninja, samurai and ronin"
console.log(formatWords(['ninja', '', 'ronin'])) // "ninja and ronin"
console.log(formatWords(['one'])) // "one"
console.log(formatWords([''])) // ""
console.log(formatWords(null)) // ""