String.prototype.isLetter = function() {
    const regex = /^[a-zA-Z]$/
    
    return regex.test(this)
}