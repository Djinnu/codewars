function capital(capitals){
    let arr = []
    capitals.forEach(x => arr.push(`The capital of ${x.state || x.country} is ${x.capital}`))
    return arr
}