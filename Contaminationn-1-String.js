//my solution:
function contamination(text, char){
    if(text === "" || char === "") {
      return ""
    } else {
      return text.split("").map(x => x = char).join("")
    }
}
//better one?
function contamination(text, char){
    return char.repeat(text.length)
}
//or
function contamination(text, char){
    return text.replace(/./g, char);
}