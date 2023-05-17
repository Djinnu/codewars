function aliasGen(){
    if(/[a-z]/i.test(arguments[0][0]) === false || /[a-z]/i.test(arguments[1][0]) === false) {
      return "Your name must start with a letter from A - Z."
    } 
    
    return firstName[arguments[0][0].toUpperCase()] +' '+ surname[arguments[1][0].toUpperCase()]
}

//better option:
function aliasGen() {
    let fName = firstName[arguments[0][0].toUpperCase()]
    let sName = surname[arguments[1][0].toUpperCase()]
    return fName && sName ? `${fName} ${sName}` : `Your name must start with a letter from A - Z.`  
}