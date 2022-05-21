function sumOfDifferences(arr) {
    let mapArr = arr.sort((a,b) => a - b ).reverse().map((x,i,arr) => x - arr[i+1])
    return arr.length > 1 ? mapArr.reduce((acc, c) => acc + c || acc) : 0
}