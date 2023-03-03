//my solution:
function lowercaseCount(str){
    let arr = str.match(/[a-z]/g)
    return arr ? arr.length : 0
}

//another  way:
function lowercaseCount(str){
    return (str.match(/[a-z]/g) || []).length
}