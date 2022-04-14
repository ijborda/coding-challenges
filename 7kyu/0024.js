// Adding Arrays

function arrAdder(arr) {
    let sentence = ''

    let colNum = arr[0].length 
    let rowNum = arr.length

    for (let i = 0; i < colNum; i++) {
        for (let j = 0; j < rowNum; j++) {
            sentence += arr[j][i]
        }
        sentence += ' '
    }

    return sentence.slice(0,-1)
}