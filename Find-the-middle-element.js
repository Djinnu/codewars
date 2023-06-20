function gimme (triplet) {
    let minValue = Math.min(...triplet)
    let maxValue = Math.max(...triplet)
    
    for(let i = 0; 0 < triplet.length; i++) {
      if(triplet[i] !== minValue && triplet[i] !== maxValue) {
        return i
      }
    }  
}

//better option:
const gimme = function (arr) {
    return arr.indexOf([...arr].sort((x, y) => x > y)[1]);
};