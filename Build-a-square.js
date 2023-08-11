function generateShape(integer){
    let str = '+'.repeat(integer) + '\n'
    let art = ''
    
    for(let i = 1; i <= integer; i++) {
      art+=str
    }
    
    return art.replace(/\n$/, "")
}