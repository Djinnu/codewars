function findAverage(array) {
    return array.length ? array.reduce((acc, c) => acc + c, 0) / array.length : 0
}