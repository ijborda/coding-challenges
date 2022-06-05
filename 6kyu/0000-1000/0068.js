// Decipher this!

function decipherThis(str) {
  return str.split(' ').map(a =>{
    let arr = a.replace(/\d+/, num => String.fromCharCode(num)).split('')
    let last = arr[arr.length - 1]
    let second = arr[1]
    arr[arr.length - 1] = second
    arr[1] = last
    return arr.join('')
  }).join(' ')
};

// Test
console.log(decipherThis('72olle 103doo 100ya')) // 'Hello good day'
console.log(decipherThis('82yade 115te 103o')) // 'Ready set go'