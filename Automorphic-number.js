function automorphic(n){
    let numStrLength = n.toString().length
    let square = Math.pow(n, 2)
    let newNumStr = square.toString()    
    
    return newNumStr.slice(-numStrLength) == n ? "Automorphic" : "Not!!"
}