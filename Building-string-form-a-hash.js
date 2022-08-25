//my first solution:
function solution(pairs){
    let str = ''
    for(element of Object.keys(pairs)) {
      str += `${element} = ${pairs[element]},`
    }
    
    return str.substring(0, str.length-1)
}

//better solution:
const solution = pairs =>
    Object.entries(pairs)
        .map(([key, value]) => `${key} = ${value}`)
        .join(',');