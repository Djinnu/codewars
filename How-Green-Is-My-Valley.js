function makeValley(arr) {
    let sortedArr = arr.sort((a, b) =>  b - a)
    let leftwing = []
    let rightwing = []
    sortedArr.forEach((x, i) => {
      if ( i % 2 === 0) {
        leftwing.push(x)
      } else if (i % 2 !== 0) {
        rightwing.push(x)
      }
    })
  
   if (leftwing.length > rightwing.length) {
      let bottom = leftwing.pop()
      rightwing.unshift(bottom)
    }
  
    rightwing.sort((a, b) => a - b)
    
    return leftwing.concat(rightwing)
  }