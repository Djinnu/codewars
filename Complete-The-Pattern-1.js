function pattern(n){
    var output="";
    
    for(let i = 1; i <= n; i++) {
      output+= `${i}`.repeat(i) + "\n"
    }
    
    return output.trimEnd();
}