function roundToNext5(n){
    for(let i = n; i <= n + 5; i++) {
      if(i % 5 === 0) {
        return i
      }
    }
}

//better:
function roundToNext5(n){
    return Math.ceil(n/5)*5;
}