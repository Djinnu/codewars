function highAndLow(numbers){
    let numArr = numbers.split(' ').map(x => Number(x))
    let maxNumStr = Math.max(...numArr).toString()
    let minNumStr = Math.min(...numArr).toString()
    return `${maxNumStr} ${minNumStr}`
}