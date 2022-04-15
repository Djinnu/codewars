function unusedDigits(...arg) {
    let numArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    return numArr.filter(x =>  !arg.join('').includes(x)).join('')
}