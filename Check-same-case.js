function sameCase(a, b){
    if(!a.match(/[a-zA-Z]/g) || !b.match(/[a-zA-Z]/g)) {
      return -1 
    } else if (a === a.toUpperCase() && b === b.toUpperCase() || a === a.toLowerCase() && b === b.toLowerCase()) {
      return 1
    } else {
      return 0
    }
  }