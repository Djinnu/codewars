function strCount(str, letter){  
    let count = 0
    
    for(let i = 0; i < str.length; i++) {
      if(str[i] === letter) {
        count++
      }
    }
    
    return count
}

// using regex match would be a better option