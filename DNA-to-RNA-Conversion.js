function DNAtoRNA(dna) {
    let re = /T/g
    
    return dna.replace(re, 'U')
}