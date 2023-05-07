//my first solution:
function first(arr, n) {
    let newArr = []
    
    if(n === 0) return []
    if(n === undefined) return [arr[0]]
    
    for(let i = 0; i < n; i++) {
      if(i >= arr.length) break;
      newArr.push(arr[i])
    }
    
    return newArr
}
//better solution:
function first(arr, n=1) {
    return arr.slice(0,n);
}