function fiveLine(s){
    let iteratable = s.trim()
    let str = ''
    
    for(let i = 1; i <= 5; i++) {
      str += iteratable.repeat(i) +  "\n"
    }
    
    return str.trim()
}