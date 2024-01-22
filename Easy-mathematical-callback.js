function processArray(arr, callback) {
    return arr.map(x => callback(x))
}