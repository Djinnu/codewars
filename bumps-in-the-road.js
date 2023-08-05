function bump(x){
    let arrMatch = x.match(/n/g)?.length || 0
    
    return arrMatch <= 15 ? 'Woohoo!' : 'Car Dead'
}