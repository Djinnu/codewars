//my first solution:
function deleteNth(arr,n){
    let result = []
    let obj = {}
    
    for(let i = 0; i < arr.length; i++) {
      if(!result.includes(arr[i])) {
        result.push(arr[i])
        obj[arr[i]] = 1
      } else {
        if(obj[arr[i]] < n) {
          obj[arr[i]]++
          result.push(arr[i])
        }
      }
    }
    
    return result
}

//better solution:
function deleteNth(arr,x) {
    var cache = {};
    return arr.filter(function(n) {
      cache[n] = (cache[n]||0) + 1;
      return cache[n] <= x;
    });
}