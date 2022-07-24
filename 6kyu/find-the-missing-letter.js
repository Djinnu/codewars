//my first solution:
function findMissingLetter(array){
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    if(array.find(x => x === x.toUpperCase())) {
      alphabet = alphabet.map(x => x.toUpperCase())
    }
  
    let start = alphabet.findIndex(x => x === array[0])
    let end = alphabet.findIndex(x => x === array[array.length-1])
    
    return alphabet.slice(start, end).filter( x => !array.includes(x)).join('')
}

//better solution:
const findMissingLetter = (array) => {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
    const start = alphabet.indexOf(array[0])
    return alphabet.slice(start, start + array.length).find(el => !array.includes(el))
}