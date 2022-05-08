//My first solution:
function isAllPossibilities(x){
    let arr = []
    for(let i = 0; i <= x.length - 1; i++) {
      x.includes(i) ? arr.push(true) : arr.push(false)
    }
    return arr.includes(false) || x.length === 0 ? false : true
}

//Better solution:  return a.length > 0 && a.every((x,i) => a.includes(i));