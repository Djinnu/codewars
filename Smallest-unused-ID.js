//my solution:
function nextId(ids){
    let id 
    let number = 0
    
    while(number <= ids.length) {
      if(!ids.includes(number)) {
        id = number
        break
      }
      number++
    }
    
    return id
}

//better one:
function nextId(ids){
    var x = 0;
    while (ids.includes(x)) x++;
    return x;
}