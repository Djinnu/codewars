//my solution:
function countSmileys(arr) {
    const regexp = /[:;][-~]?[D)]/g
    const result = arr.join('').match(regexp)
    
    return result ? result.length : 0 
}