function isSortedAndHow(array) {
    let ascending = array.slice().sort((a,b) => a - b).join('')
    let descending = array.slice().sort((a, b) => b - a).join('')
    
    if(array.join('') === ascending) return 'yes, ascending'
    if(array.join('') === descending) return 'yes, descending'
    
    return 'no'
}