// Lario and Muigi Pipe Problem

function pipeFix(numbers){
    let min = Math.min(...numbers)
    let max = Math.max(...numbers)
    return Array.from( new Array(max - min + 1), (_, i) => min + i )
}