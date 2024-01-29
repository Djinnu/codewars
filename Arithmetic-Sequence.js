var nthterm = function(){
    let output = arguments[0]
    
    for(let i = 1; i <= arguments[1]; i++) {
      output+= arguments[2]
    }
    
    return output
}