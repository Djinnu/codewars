function largestPairSum (numbers) {
    let newArr = numbers.sort((a,b) => a - b)
    
    return newArr[newArr.length - 1] + newArr[newArr.length - 2]
}