//my solution:
function digital_root(n) {
    let result = n
    
    while(result > 9) {
      result = result.toString().split('').reduce((acc, c) => acc + +c, 0)
    }
    
    return result
}

//better Math solution:
function digital_root(n) {
    return (n - 1) % 9 + 1;
}