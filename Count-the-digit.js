function nbDig(n, d) {
  let sumOfD = 0
  
  for(let i = 0; i <= n; i++) {
    let square = (i*i).toString()
    for(let j = 0; j < square.length; j++) {
      if(+square[j] === d) {
        sumOfD++
      }
    }
  }
  
  return sumOfD
}