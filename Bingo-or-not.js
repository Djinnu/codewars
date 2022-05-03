function bingo(a) {
    let bingoNums = [2, 7, 9, 14, 15]
    return bingoNums.every(value => a.includes(value)) ? 'WIN' : 'LOSE'
}