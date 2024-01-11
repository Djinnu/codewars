function splitTheBill(x) {
    let ppl = Object.values(x)
    let avg = ppl.reduce((acc, c) => acc + c, 0) / ppl.length
    
    for(const key in x) {
      x[key] = Number((x[key] - avg).toFixed(2))
    }
    
    return x
}