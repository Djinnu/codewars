function squareOrSquareRoot(array) {
    return array.map(x => {
      return Number.isInteger(Math.sqrt(x)) ? Math.sqrt(x) : Math.pow(x, 2) 
    })
  }