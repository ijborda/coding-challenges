// Draw stairs

function drawStairs(n) {
    return Array.from(new Array(n))
      .fill('I')
      .map((a, i) => ' '.repeat(i) + a)
      .join('\n')
}