function sortMyString(S) {
    let evens = []
    let odds = []
    
    for(let i = 0; i < S.length; i++) {
      i % 2 === 0 ? evens.push(S[i]) : odds.push(S[i])
    }
    
    return evens.join("") + " " + odds.join("")
}