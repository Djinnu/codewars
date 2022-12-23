function xor(a, b) {
    if(a === false && b === true || a === true && b === false) {
      return true
    } else {
      return false
    }
}

//better solution
function xor(a, b) {
    return a != b;
}