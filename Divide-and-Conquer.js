function divCon(x){
    let strSum = 0
    let numSum = 0
    
    x.forEach(x => typeof x === 'string' ? strSum += Number(x) : numSum += x)
    
    return numSum - strSum
}