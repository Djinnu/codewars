function rowWeights(array){
    let array1 = []
    let array2 = []
    
    array.forEach((x, i) => i % 2 === 0 ? array1.push(x) : array2.push(x))
    
    return [array1.reduce((acc, c) => acc + c, 0), array2.reduce((acc, c) => acc + c, 0)]
}

//or 
function rowWeights(array){
    let t1 = array.filter((x, i)=>i%2==0).reduce((a,item)=>a+item,0);
    let t2 = array.filter((x, i)=>i%2!=0).reduce((a,item)=>a+item,0);
    
    return [t1, t2]
}