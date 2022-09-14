function partsSums(ls) {
    let listOfSum = []
    let sum = ls.reduce((acc, c) => acc + c, 0)
    listOfSum.push(sum)
    
    for(let i = 0; i < ls.length; i++) {
      sum -= ls[i]
      listOfSum.push(sum)
    }
    
    //Time: ~3000ms
    return listOfSum
}