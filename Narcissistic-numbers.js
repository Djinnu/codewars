function isNarcissistic(n){
    let strArr = n.toString().split('')
    let result = 0
    for (let i = 0; i < strArr.length; i++) {
        result += Math.pow(strArr[i], strArr.length)
    }
    return result === n ? true : false
}