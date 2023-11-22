function howManySmaller(arr,n){
    let mapArr = arr.map(x => +x.toFixed(2))
    
    return mapArr.filter(x => x < n).length
}