//my solution(challenge was not worded correctly?)
function closeCompare(a, b, margin) {
    margin ? margin : margin = 0
    let distance = Math.abs(a - b)
    
    if(margin >= distance) {
      return 0
    } else if( a < b) {
      return -1
    } else {
      return 1
    }  
}

//better solution:
function closeCompare(a, b, margin = 0) {
    return Math.abs(a - b) <= margin ? 0 : a < b ? -1 : 1;
}