function getLengthOfMissingArray(arrayOfArrays) {
    if(!arrayOfArrays || arrayOfArrays.length === 0 || arrayOfArrays.includes(null)) {
      return 0
    }
   
    let sortedArr = arrayOfArrays.sort((a,b) => a.length - b.length)  
    let arrLengths = sortedArr.map(x => x.length)
    
    if(sortedArr[0].length === 0) {
      return 0
    }
    
    for(let i = arrLengths[0], j = 0; i <= arrLengths[arrLengths.length-1]; i++,j++) {
      if(i !== sortedArr[j].length) {
        return i
      }
    }
   
}