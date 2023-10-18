reverse = function(array) {
    let output = []
    for(let i = 0; i < array.length; i++) {
      output.unshift(array[i])
    }
    
    return output
}