function sumOfMinimums(arr) {
    return arr.map(x => Math.min(...x)).reduce((acc, c) => acc + c, 0)
}