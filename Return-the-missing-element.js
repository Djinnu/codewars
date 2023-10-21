function getMissingElement(superImportantArray){
    let numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]
    
    return numbersArr.find(x => !superImportantArray.includes(x))
}