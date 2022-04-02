// Count of positives / sum of negatives

function countPositivesSumNegatives(input) {
    if (input === null) return []
    if (input.length === 0) return []
    return input.reduce( (count, num) => {
      num > 0 ? count[0] += 1 : count[1] += num
      return count
    }, [0, 0] )
}