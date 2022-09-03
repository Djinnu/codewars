function diamond(n){
    let str = ''
    let stars = 1
    
    if(n % 2 === 0 || n < 0) {
      return null
    }
    
    for(let i = 0; i < n; i++) {
      str += `${" ".repeat(Math.abs(stars-n)/2)}${'*'.repeat(stars)}\n`
      stars = (i < Math.floor(n/2)) ? stars + 2 : stars - 2 
    }
    
    return str
}
  