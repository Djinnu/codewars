function stairsIn20(s){
  return s.map(x => x.reduce((acc, c) => acc + c, 0)).reduce((acc, c) => acc + c, 0) * 20
}