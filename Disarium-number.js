function disariumNumber(n){
    let red = n.toString().split('').reduce((acc, c, i) => acc + Math.pow(c, i+1), 0)
    return n === red ? "Disarium !!" : "Not !!"
}