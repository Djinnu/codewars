function minSum(arr) {
    let sortedArr = arr.sort((a,b) => a - b)
    let newArr = []
    for(let i = 0; i < sortedArr.length; i++) {
      newArr.push(sortedArr[i] * sortedArr[sortedArr.length - 1])
      sortedArr.pop()
    }
    return newArr.reduce((acc, c) => acc + c)
}