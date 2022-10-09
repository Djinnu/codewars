//codewars top solution:
function pyramid(n) {
    const res = [];
    for(let i = 0; i < n; i++){
      res.push([...Array(i+1)].fill(1))
    }
    return res;
}

//my solution:
function pyramid(n) {
    let arr = [] 
    let subArr = []
    
    for(let i = 1; i <= n; i++) {
      subArr = subArr.concat(1)
      arr.push(subArr)
    }
    
    return arr
}
