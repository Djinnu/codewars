//my soluution:
function meeting(s) {
    let arr = s.toUpperCase().split(';')
    
    return arr.map(x => {
      x = x.split(':').reverse().join(', ')
      return x = `(${x})`
    }).sort().join('')
}

//solution i also liked:
const meeting = s => {
    return s.toUpperCase()
           .replace(/(\w+):(\w+)/g, "($2, $1)")
           .split(';')
           .sort()
           .join('')
};