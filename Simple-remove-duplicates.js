function solve(arr) {
    let output = []
    
    for(let i = arr.length -1; i >= 0; i--) {
      if(!output.includes(arr[i])) {
        output.unshift(arr[i])
      }
    }
    
    return output
}

//better option:
function solve(arr){
    return arr.filter((val,i) => arr.lastIndexOf(val) == i);
}