function shorter_reverse_longer(a,b){
    return b.length <= a.length ? b + a.split("").reverse().join("") + b : a + b.split("").reverse().join("") + a
}