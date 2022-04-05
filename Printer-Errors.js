function printerError(s) {
    let count = s.match(/[n-z]/g) ? s.match(/[n-z]/g).length : 0
    return `${count}/${s.length}`
  }