function findNextSquare(sq) {
    const num = Math.sqrt(sq)
    if (Number.isInteger(num) !== true) {
        return -1
    } else {
        return (num + 1) * (num + 1)
    }
}