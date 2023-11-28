function any(arr, fun){
    return arr.some(x => fun(x))
}

//better:
const any = (arr, fun) => arr.some(fun);