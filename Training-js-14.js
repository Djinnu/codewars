function colorOf(r,g,b){
    let rHex = r.toString(16).length === 2 ? r.toString(16) : '0' + r.toString(16)
    let gHex = g.toString(16).length === 2 ? g.toString(16) : '0' + g.toString(16)
    let bHex = b.toString(16).length === 2 ? b.toString(16) : '0' + b.toString(16)
    
    return '#' + rHex + gHex + bHex
}