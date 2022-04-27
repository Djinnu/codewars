//my first solution:


function doubleChar(str) {
    let newStr = ''
    for(let i = 0; i < str.length; i++) {
        newStr += str[i] + str[i]
    }
    console.log(newStr)
}

//better solution: return str.split("").map(c => c + c).join("")