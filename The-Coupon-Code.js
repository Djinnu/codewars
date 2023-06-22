function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let currentTime = new Date(currentDate).getTime()
    let expirationTime = new Date(expirationDate).getTime()
    
    return enteredCode === correctCode && expirationTime >= currentTime
}