//my solution:
function twoHighest(arr) {
    let set = Array.from(new Set(arr)).sort((a, b) => a - b ).reverse()
    
    return set.length === 0 ? [] : set.length === 1 ? [set[0]] : [set[0], set[1]] 
}

//better one :
function twoHighest(arr) {
    return [...new Set(arr)].sort((a, b) => b - a).slice(0, 2)
}