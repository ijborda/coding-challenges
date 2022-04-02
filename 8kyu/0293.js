// Training JS #21: Methods of String object--trim() and the string template

function fiveLine(s){
    return Array.from(new Array(5)).fill(s.trim()).map( (a, i) => a.repeat(i + 1) ).join('\n')
}