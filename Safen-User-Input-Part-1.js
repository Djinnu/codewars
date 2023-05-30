//my solution:
function htmlspecialchars(formData) {
    let newStr = ''
    
    for(let i = 0; i < formData.length; i++) {
      if(formData[i] === "<") {
        newStr+="&lt;" 
      } else if (formData[i] === ">") {
        newStr+="&gt;"
      } else if (formData[i] === '"') {
        newStr+= "&quot;"
      } else if (formData[i] === "&") {
        newStr+= "&amp;"
      } else {
        newStr+=formData[i]
      }
    }
    
    return newStr
}

//another option:
function htmlspecialchars(formData) {
    return formData.replace(/&/g, "&amp;")
                   .replace(/"/g, "&quot;")
                   .replace(/</g, "&lt;")
                   .replace(/>/g, "&gt;");
}
