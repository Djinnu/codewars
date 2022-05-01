function maskify(cc) {
    let str = ''
    for (let i = 0; i < cc.length; i++) {
      if ( i < cc.length - 4) {
        str += '#'
      }
      else {
        str += cc[i]
      } 
    }
    return str
}