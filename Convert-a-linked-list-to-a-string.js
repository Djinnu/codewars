function stringify(list) {
    let output = ""
    
    while(list) {
      output += list.data + " -> "
      list = list.next
    }
    
    return output += "null"
}