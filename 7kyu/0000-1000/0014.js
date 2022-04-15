// Simple Fun #176: Reverse Letter

function reverseLetter(str) {
    return str.replace(/[^a-z]/gi, "").split("").reverse().join("")
}