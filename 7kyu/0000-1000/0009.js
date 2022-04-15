// Anagram Detection

var isAnagram = function(test, original) {
    let testArr = test.toLowerCase().split("")
    let testArrCopy = testArr.slice()
    let originalArr = original.toLowerCase().split("")
    let originalArrCopy = originalArr.slice()
    originalArr.forEach( (letter, index) => {
      if (testArr.includes(letter)) {
        delete originalArrCopy[index]
        delete testArrCopy[testArrCopy.indexOf(letter)]
      }
    })
    return testArr.length === originalArr.length && testArrCopy.every(letter => /[^a-zA-Z]/.test(letter)) && originalArrCopy.every(letter => /[^a-zA-Z]/.test(letter))
};