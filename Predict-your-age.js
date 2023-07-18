function predictAge(age1,age2,age3,age4,age5,age6,age7,age8){
    let arr = [...arguments]
    let reduce = arr.map(x => x * x).reduce((acc, c) => acc + c, 0)
    
    return Math.floor(Math.sqrt(reduce) / 2)
}