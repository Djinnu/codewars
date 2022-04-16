function isOddHeavy(n){
    let odd = []
    let even = []
    n.forEach(x => {
        if (x % 2 === 0) {
            even.push(x)
        } else {
            odd.push(x)
        }
    })
    let sortedOdd = odd.sort((a, b) => a - b)
    let sortedEven = even.sort((a, b) => a - b)
    return sortedOdd.length === 0 || sortedOdd[0] < sortedEven[sortedEven.length - 1] ? false : true
}