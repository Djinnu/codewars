//first solution:
function menFromBoys(arr){
    let evens = []
    let odds = []
    
    arr.forEach(x => x % 2 === 0 ? evens.push(x) : odds.push(x) )
    
    evens = [...new Set(evens.sort((a, b) => a - b))]
    odds = [...new Set(odds.sort((a, b) => b - a))]
    
    return evens.concat(odds)
}
//better one:
function menFromBoys(arr){
    arr = Array.from(new Set(arr));
    let odd = arr.filter(a => a % 2).sort((a, b) => b - a);
    let even = arr.filter(a => a % 2 === 0).sort((a, b) => a - b);
    return even.concat(odd);
}