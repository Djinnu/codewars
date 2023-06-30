function none(arr, fun){
    return arr.every(x => !fun(x))
}