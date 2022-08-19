function count (string) {  
    let obj = {}
    
    string.split('').forEach(x => obj[x] = obj[x] ? obj[x] += 1 : 1)
   
    return obj;
}