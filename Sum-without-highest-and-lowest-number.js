function sumArray(array) {
    if(!array || array.length < 3) return 0
    
    return array.sort((a,b) => a - b ).reduce((acc, c, i) => {
      if(i === 0 || i === array.length-1) {
        return acc
      } else {
        return acc + c
      }
    }, 0)
}