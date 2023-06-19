function twoOldestAges(ages){
    let sortedAges = ages.sort((a,b) => a - b)
    
    return sortedAges.slice(-2)
}