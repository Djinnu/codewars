//My first solution:
function findNb(m) {
    let count = 0
    let result = 0
    
    for(let i = 1; result < m; i++) {
      result += Math.pow(i, 3)
      count++
    }
  
    return result === m ? count : -1
}

//Better solution:
function findNb(m) {
    var n = 0
    while (m > 0) m -= ++n**3
    return m ? -1 : n
}