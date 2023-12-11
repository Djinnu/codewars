//my solution:
function specialNumber(n){
    let arrLength =  n.toString().split("").filter(x => x <= 5).length
    
    return n.toString().length === arrLength ? "Special!!" : "NOT!!"
}

//better one:
function specialNumber(n){
    return /[6-9]/.test(n)?"NOT!!":"Special!!"
}