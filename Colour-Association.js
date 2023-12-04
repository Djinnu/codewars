//my solution:
function colourAssociation(array){
    return array.map((x, i) => {
      let obj = {}
      obj[x[0]] = x[1]
      return obj
    }) 
}

//better:
function colourAssociation(array){
    return array.map(x => ({ [x[0]]: x[1]}));
}