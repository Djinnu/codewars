function consonantCount(str) {
    const consonantsRegex = /[bcdfghjklmnpqrstvwxyz]/gi
    const strMatch = str.match(consonantsRegex)
    
    return strMatch ? strMatch.length : 0 
}