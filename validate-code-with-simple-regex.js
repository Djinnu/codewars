function validateCode (code) {
    let str = code.toString()
    let regex = /^[123]/
    
    return  regex.test(str)
}