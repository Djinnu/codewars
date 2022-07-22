//My first solution:
function SeriesSum(n)
{
  let fraction = 4
  let count = 1
  let sum = 1
  
  if (n <= 1) {
    return n.toFixed(2).toString()
  }
  
  while(count < n) {
    sum += (1 / fraction)
    count++
    fraction += 3
  }
  
  return sum.toFixed(2).toString()
}
//A more compact solution:
function SeriesSum(n) {
    for (var s = 0, i = 0; i < n; i++) {
      s += 1 / (1 + i * 3)
    }
    
    return s.toFixed(2)
}