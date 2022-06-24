// Arrh, grabscrab!

function grabscrab(anagram, dictionary) {
  return dictionary.filter(word => isSame(anagram, word));
}
function isSame(a, b) {
  let aArr = a.split('');
  let bArr = b.split('');
  return aArr.every(char => {
    if (bArr.includes(char)) {
      delete bArr[bArr.indexOf(char)]
      return true;
    } else {
      return false;
    }
  });
}

// Test

console.log(grabscrab( "ortsp", ["sport", "parrot", "ports", "matey"] )) // ["sport", "ports"]