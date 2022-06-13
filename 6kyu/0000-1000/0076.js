// String transformer

function stringTransformer(str) {
  return str.split(' ').map(word => {
    return word.split('').map(char => {
      if (char === char.toUpperCase()) {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    }).join('');
  }).reverse().join(' ');
}

// Test
console.log(stringTransformer('Example string')); // 'STRING eXAMPLE'