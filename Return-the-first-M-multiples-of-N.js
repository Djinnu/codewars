function multiples(m, n){
    let arr = []
    let num = n
    
    for(let i = 1; i <= m; i++) {
      arr.push(num)
      num += n
    }
    
    return arr
}

//better:
function multiples(m, n){
    var arr=[];
    for (var i=1; i<=m; ++i)
      arr.push(n*i);
    return arr;
}