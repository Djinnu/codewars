//my solution:
multiplicationTable = function(size) {
    let arr = []
    for(let i = 1; i <= size; i++) {
      arr.push(i)
    }
    
    return arr.map((x,i) => {
      return x = arr.map(x => x * (i+1))
    })
}


//code wars top solution:
multiplicationTable = function(size) {
    var result = [];
  
    for (var i = 0; i < size; i++) {
      result[i] = [];
      for(var j = 0; j < size; j++) {
        result[i][j] = (i + 1) * (j + 1);
      }
    }
    
    return result
}