//my solution:
function highestRank(arr){
    let obj = {}
    let mostFrequentKey
    let count = 0
    
    arr.forEach(x => obj[x] ? obj[x] += 1 : obj[x] = 1)
    
    Object.entries(obj).forEach(([key, value]) => {
      if(value > count) {
        count = value
        mostFrequentKey = Number(key)
      } else if (value === count) {
        mostFrequentKey = Math.max(mostFrequentKey, Number(key))
      }
    })
  
    return mostFrequentKey
}


//another iteresting way to solve it:
function highestRank(arr){
    return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
}

