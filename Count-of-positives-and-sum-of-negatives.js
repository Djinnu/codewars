function countPositivesSumNegatives(input) {
    let posCount = 0
    let negSum = 0
    if (input === null || input.length === 0) {
      return []
    } else {
      input.forEach(x => Math.sign(x) === 1 ? posCount += 1 : negSum += x)
      return [posCount, negSum]
    }
}