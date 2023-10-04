function nthSmallest(arr, pos){
    let sortedArr = arr.sort((a, b) => a - b)
    return sortedArr[pos-1]
}