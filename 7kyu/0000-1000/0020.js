// Ones and Zeros

const binaryArrayToNumber = arr => {
    arr = arr.reverse()
    let intVal = 0
    for (let i = 0; i < arr.length; i++) {
      arr[i] === 1 ? intVal += Math.pow(2, i) : intVal += 0
    }
    return intVal
};