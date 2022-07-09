//my first solution:
function narcissistic(value) {
    let result = 0
    let arr = value.toString().split('')
    arr.forEach(x => result += Math.pow(x, arr.length))
      
    return result === value
}
//better solution:
function narcissistic(value) {
    let arr = value.toString().split('')
    let reduce = arr.reduce((acc,c) => Number(acc) + Math.pow(c, arr.length), 0)
    return reduce === value
}