function DNAStrand(dna){
    return dna.split('').map(x => {
      if(x === 'A') {
        return x = 'T'
      } else if(x === 'T') {
        return x = 'A'
      } else if(x === 'C') {
        return x = 'G'
      } else if(x === 'G') {
        return x = 'C'
      }
    }).join('')
}