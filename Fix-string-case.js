//my solution using string methods only:
function solve(s){
    if(/[A-Z]/.test(s) === false) {
      return s.toLowerCase()
    } else if (/[a-z]/.test(s) === false) {
      return s.toUpperCase()
    }
    
    return s.match(/[A-Z]/g).length > s.match(/[a-z]/g).length ? s.toUpperCase() : s.toLowerCase()
}

//better solution without string methods:
function solve(s){
    let lowerC = 0;
    let upperC = 0;
    for( let i = 0;i<s.length;i++){
      if( s[i] == s[i].toUpperCase()){
        upperC++;
      }
      else{
        lowerC++;
      }
    }
    return lowerC >= upperC ? s.toLowerCase() : s.toUpperCase()
}
