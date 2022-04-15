// Summing a number's digits

function sumDigits(number) {
    return String(Math.abs(number)).split("").reduce((a, b) => +a + +b, 0)
}