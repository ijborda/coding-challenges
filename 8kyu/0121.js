// Correct the mistakes of the character recognition software

function correct(string) {
    console.log(string)
    return string.replace(/5|0|1/g, c => c === "5" ? "S" : c === "1" ? "I" : "O") 
}