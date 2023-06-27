function mxdiflg(a1, a2) {
    if(a1.length === 0 || a2.length === 0) return -1
    let array1 = a1.map(x => x.length)
    let array2 = a2.map(x => x.length)
    
    let firstMinMax = [Math.max(...array1), Math.min(...array1)]
    let secondMinMax = [Math.max(...array2), Math.min(...array2)]
    
    let firstDif = firstMinMax[0] - secondMinMax[1]
    let secondDif = secondMinMax[0] - firstMinMax[1]
    
    return firstDif > secondDif ? firstDif : secondDif 
}