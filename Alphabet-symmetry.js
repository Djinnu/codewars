function solve(arr){  
    let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    
    return arr.map(x => {
      let count = 0
      x.toLowerCase().split("").forEach((x,i) => {
        let alphabetIndex = alphabet.indexOf(x)
        if(i === alphabetIndex) count++
      })
      return count
    })
}