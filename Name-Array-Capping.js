function capMe(names) {
    return names.map(x => {
      let firstLetter = x[0].toUpperCase()
      let rest = x.slice(1).toLowerCase()
      return firstLetter + rest
    })
}