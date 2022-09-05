function fakeBin(x){
    return x.split('').map(x => Number(x) < 5 ? x = 0 : x = 1).join('')
}

//Number function isnt needed, because JS lets you compare different types when its ==  and not the ===