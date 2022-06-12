// Kebabize

function kebabize(str) {
  let kebabize = str.replace(/[0-9]/g, a => '').replace(/[A-Z]/g, a => '-' + a.toLowerCase()) 
  return kebabize[0] === kebabize[0].toUpperCase() ? kebabize.slice(1) : kebabize;
}

// Test
console.log(kebabize('myCamelCasedString')) // 'my-camel-cased-string'
console.log(kebabize('myCamelHas3Humps')) // 'my-camel-has-humps'
console.log(kebabize('F3p3')) // 'fp'