function getGrade (s1, s2, s3) {
    let avrg = (s1 + s2 + s3) / 3
    if(avrg >= 90) {
      return "A"
    } else if(avrg >= 80) {
      return "B"
    } else if(avrg >= 70) {
      return "C"
    } else if(avrg >= 60) {
      return "D"
    } else {
      return "F"
    }
}