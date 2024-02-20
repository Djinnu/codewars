var splitInParts = function(s, partLength){
    let output = ''
    
    for(let i = 0; i < s.length; i+=partLength) {
      output+= s.slice(i, i+partLength)+" "
    }
    
    return output.trim()
}