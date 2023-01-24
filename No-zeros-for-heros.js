//my first solution

function noBoringZeros(n) {
    let str = n.toString()
  
    while(str.endsWith('0')) {
      str = str.replace(/0$/, "")
    }
    
    return Number(str)
}

//better one
function noBoringZeros(n) {
    return +`${n}`.replace(/0*$/, "");
}