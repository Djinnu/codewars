function averages(numbers) {
    if(numbers === null || numbers.length < 2) return []
    
    let arr = []
    
    for(let i = 0; i < numbers.length; i++) {
      arr.push((numbers[i] + numbers[i+1]) / 2)
    }
    
    return arr.slice(0, -1)
}