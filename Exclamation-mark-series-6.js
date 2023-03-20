function remove(s,n){
  for(let i = 0; i < n; i++) {
    if(!s.includes("!")) {
      break;
    }
    s = s.replace("!", "")
  }
  
  return s
}