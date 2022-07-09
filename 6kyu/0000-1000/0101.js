// Alphabetized

function alphabetized(s) {
  let clean = s.split('').filter(a => a.match(/[a-zA-Z]/));
  let cleanWord = clean.join('');
  return clean
    .sort((a, b) => {
      if (a.toLowerCase() === b.toLowerCase()) {
        return cleanWord.indexOf(a) - cleanWord.indexOf(b);
      }
      else {
        return a.toLowerCase().charCodeAt() - b.toLowerCase().charCodeAt();
      }
    })
    .join('');
}

// Test
console.log(alphabetized('The Holy Bible')) // 'BbeehHilloTy'