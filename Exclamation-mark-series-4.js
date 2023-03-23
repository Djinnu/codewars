//my solution:

function remove (string) {
    while(string.includes("!")) {
      string = string.replace("!", "")
    }
    
    return string + "!"
}

//better one:
function remove (string) {
    while(string.includes("!")) {
      string = string.replace("!", "")
    }
    
    return string + "!"
}