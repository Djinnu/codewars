function past(h, m, s){
    let mil = 1000
    let sMil = s * mil
    let mMil = m * 60000
    let hMil = h * 3600000
    
    return hMil + mMil + sMil
}