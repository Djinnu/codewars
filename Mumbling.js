function accum(s) { 
    return s.split('').map((x, i) => x.toUpperCase() + x.repeat(i).toLowerCase()).join('-') 
}
  