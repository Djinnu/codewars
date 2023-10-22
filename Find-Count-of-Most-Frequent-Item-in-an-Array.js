function mostFrequentItemCount(collection) {
    let obj = {}
    
    collection.forEach(x => obj[x] ? obj[x]++ : obj[x] = 1)
    
    let arr = Object.values(obj)
    
    return collection.length ? Math.max(...arr) : 0
}