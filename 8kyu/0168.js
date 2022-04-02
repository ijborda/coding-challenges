// Find Multiples of a Number

function findMultiples(integer, limit) {
    return Array.from(new Array(limit), (_, i) => i + 1)
      .filter( num => num % integer === 0)
}