function pattern(n){
    var output="";
     
    for (let i = n; i >= 1; i--) {
       let subString = ''
       let iteration = i
       let count = 0
       while(iteration > 0) {
         subString+= `${n-count}`
         iteration--
         count++
       }
       output+=subString + '\n'
    }
   
    return output.trimEnd();
}