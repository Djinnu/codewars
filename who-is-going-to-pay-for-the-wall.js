//my solution:
function whoIsPaying(name){
    let arr = [name]
    
    if(name.length > 2) {
      arr.push(name[0]+name[1])
    }
    return arr
}

//better one:
function whoIsPaying(name){
    return (name.length>2)?([name, name.substr(0,2)]):[name];
}