function betweenExtremes(numbers) {
    let sortedArr = numbers.sort((a, b) => b - a)
    
    return sortedArr[0] - sortedArr[sortedArr.length-1]
}