//my first clunky solution:
function isOpposite(s1,s2){
    if(s1 === "" || s2 === "") return false
    if(s1.length !== s2.length) return false
    
    let arr = []
    
    for(let i = 0; i < s1.length; i++) {
      if(s1[i] === s1[i].toLowerCase() && s2[i] === s1[i].toUpperCase()) {
        arr.push(true)
      } else if(s1[i] === s1[i].toUpperCase() && s2[i] === s1[i].toLowerCase()) {
        arr.push(true)
      } else {
        return false
      }
    }
    
    return true
} 

//better options:
function isOpposite(s1,s2){
    if(s1 === s2 || s1.toLowerCase() !== s2.toLowerCase()) return false;
    
    for(var i = 0; i < s1.length; i++) {
      if(s1.charAt(i) === s2.charAt(i)) return false;
    }
    
    return true;
    
}

//even better one:
function isOpposite(s1,s2){
    return s1.split('')
      .map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase())
      .join('') === s2 && s1 !== '';
    
}