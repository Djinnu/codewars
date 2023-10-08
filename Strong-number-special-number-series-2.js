function strong(n) {
    function factorialize(num) {
      if (num < 0) 
            return -1;
      else if (num == 0) 
          return 1;
      else {
          return (num * factorialize(num - 1));
      }
    }
    let factorial = 0
    
    let arr = n.toString().split("").map(x => {
      x = Number(x)
      let factorialized =  factorialize(x)
      factorial += factorialized
      return factorialized
    })
    
    return factorial === n ? "STRONG!!!!": "Not Strong !!"
}