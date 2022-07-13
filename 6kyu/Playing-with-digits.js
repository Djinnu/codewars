function digPow(n, p){
    let val = 0
    let arr = n.toString().split('').map(Number)
    for(let i = 0,  j = p; i < arr.length; i++, j++) {
        val += Math.pow(arr[i], j)
    }
    return (val / n) % 1 === 0 ? val / n : -1
}