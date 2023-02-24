function arrayMadness(a, b) {
  let aSum = a.map(x => Math.pow(x, 2)).reduce((acc, c) => acc + c, 0)
  let bSum = b.map(x => Math.pow(x, 3)).reduce((acc, c) => acc + c, 0)
  
  return aSum > bSum
}