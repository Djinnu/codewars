function sumEvenNumbers(input) {
    return input.filter(x => x % 2 === 0).reduce((acc, c) => acc + c, 0)
}