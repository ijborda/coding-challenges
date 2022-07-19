// Christmas tree

function christmasTree(height) {
  return Array.from(new Array(height)).map((_, i) => {
    return ' '.repeat(height - i - 1) + '*'.repeat(i * 2 + 1) + ' '.repeat(height - i - 1);
  }).join('\n');
}

// Test
console.log(christmasTree(5))