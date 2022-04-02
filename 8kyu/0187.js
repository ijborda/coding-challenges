// Is it a number?

function isDigit(s) {
    return s.trim().length === 0 ? false : !([NaN].includes(Number(s.trim())))
}