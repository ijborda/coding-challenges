// Check same case

function sameCase(a, b) {
    return !isLetter(a) || !isLetter(b) ? -1 :
           isLower(a) === isLower(b)    ?  1 : 0
}

function isLower(a) {
    return a.charCodeAt() >= 97 && a.charCodeAt() <= 122
}

function isLetter(a) {
    return /[a-z]/i.test(a)
}