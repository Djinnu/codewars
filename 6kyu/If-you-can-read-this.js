function toNato(words) {
    let str = ''
    
    for(let i = 0; i < words.length; i++) {
      NATO[words[i].toUpperCase()] ? str += NATO[words[i].toUpperCase()] + " " : words[i] !== " " ? str += words[i] + " " : ""
    }
    
    return str.trim();
}