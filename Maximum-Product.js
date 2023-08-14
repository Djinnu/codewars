function adjacentElementsProduct(array) {
    let mapArr = array.map((x, i, arr) => x * arr[i+1]).slice(0, -1) 
    
    return Math.max(...mapArr)
}