function sumOfIntegersInString(s){
    let regex = /\d+/g
    let matched = s.match(regex)
    
    return matched ? matched.reduce((acc, c) => acc + Number(c), 0) : 0
}