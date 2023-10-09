function calc(x){
    let total1 = ''
    
    for(let i = 0; i < x.length; i++) {
      total1+= x.charCodeAt(i)
    }
    
    let total2 = total1.toString().replace(/7/g, '1')
    let total1Sum = 0
    let total2Sum = 0
    
    for(let i = 0; i < total1.length; i++) {
      total1Sum += Number(total1[i])
      total2Sum += Number(total2[i]) 
    }
    
    return total1Sum - total2Sum
}