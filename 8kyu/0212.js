// Parse float

function parseF(s) {
    console.log(s)
    return [NaN, undefined, null].includes(parseFloat(s)) ? null : parseFloat(s);
}