//my first solution:
function nearestSq(n){
  let option1 = Math.pow(Math.floor(Math.sqrt(n)), 2)
  let option2 = Math.pow(Math.ceil(Math.sqrt(n)), 2)
  
  return n - option1 < option2 - n ? option1 : option2
}

//better option:
const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2);