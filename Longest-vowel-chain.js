function solve(s){
    let regex = /[aeiou]+/g
    let map = s.match(regex).map(x => x.length)
    return Math.max(...map)
}