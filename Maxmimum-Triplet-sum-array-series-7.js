function maxTriSum(numbers){
    let set = new Set(numbers)
    let sortedArr = Array.from(set).sort((a, b) => b - a)
    
    return sortedArr[0] + sortedArr[1] + sortedArr[2]
}