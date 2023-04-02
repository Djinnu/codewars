function calculator(a,b,sign){
    let type = typeof a === "number" && typeof b === "number"
    
    if(sign === "+" && type) {
      return a + b
    } else if (sign === "-" && type) {
      return a - b
    } else if (sign === "*" && type) {
      return a * b
    } else if (sign === "/" && type) {
      return a / b
    } else {
      return "unknown value"
    }
}