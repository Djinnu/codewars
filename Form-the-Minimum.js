function minValue(values){
    let setArray = Array.from(new Set(values))
    
    return Number(setArray.sort((a, b) => a - b).join(""))
}