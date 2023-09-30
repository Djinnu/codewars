function largest(n, array) {
    let sortedArr = array.sort((a, b) => a - b)
    return n ? sortedArr.slice(-n) : []
}