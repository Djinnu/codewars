function modifiedSum(a, n) {
    return a.reduce((acc, c) => acc + Math.pow(c, n), 0) - a.reduce((acc, c) => acc + c, 0)
}