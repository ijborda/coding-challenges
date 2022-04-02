// simple calculator

function calculator(a,b,sign){
    return typeof a !== "number" || typeof b !== "number" ? "unknown value" :
           sign === "+" ? a + b :
           sign === "-" ? a - b :
           sign === "*" ? a * b :
           sign === "/" ? a / b : "unknown value"
}