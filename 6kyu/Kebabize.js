function kebabize(str) {
    const regex = /[A-Z]/g
    
    return str.replace(regex, (x, i) => {
      if(i === 0) {
        return x.toLowerCase()
      } else {
        return '-' + x.toLowerCase()
      }
    }).replace(/\d/g, '')
}