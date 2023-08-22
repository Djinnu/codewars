function findLongest(array) {
    let digitCount = 0
    let solution 
    let strArr = array.map(x => x.toString()).forEach(x => {
      if(x.length > digitCount) {
        solution = Number(x)
        digitCount = x.length
      }
    })
                                                     
    return solution
}

//better option:
const findLongest = l => l
  .reduce((a, b) => (`${b}`.length > `${a}`.length) ? b : a);