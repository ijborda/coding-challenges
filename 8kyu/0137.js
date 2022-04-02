// Multiplication table for number

function multiTable(number) {
    return Array.from( new Array(10), (_, i) => 1 + i )
      .map( (num, i) => `${i + 1} * ${number} = ${(i + 1) * number}` )
      .join("\n")
}