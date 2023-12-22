function findMissing(arr1, arr2) {
    let sortedArr1 = arr1.sort((a, b) => a - b)
    let sortedArr2 = arr2.sort((a, b) => a - b)
    
    for(let i = 0; i < sortedArr1.length; i++) {
      if(sortedArr1[i] !== sortedArr2[i]) {
        return sortedArr1[i]
      }
    }
}
  