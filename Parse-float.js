//first solution
function parseF(s) {
    if(s === '0' || s === 0) {
      return 0
    }
    
    return parseFloat(s) || null
}

//better option:
function parseF(s) {
    if(s === '0' || s === 0) {
      return 0
    }
    
    return parseFloat(s) || null
}