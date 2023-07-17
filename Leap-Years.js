function isLeapYear(year) {
    if(Number.isInteger(year / 400)) {
      return true
    } else if(Number.isInteger(year / 100)) {
      return false
    } else {
      return Number.isInteger(year / 4)
    }
}
