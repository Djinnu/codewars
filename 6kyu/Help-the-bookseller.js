//my solution:
function stockList(listOfArt, listOfCat){
    if(listOfArt.length === 0 || listOfCat.length === 0) {
      return ""
    }
    
    let obj = {}
    listOfCat.forEach(x => obj[x] = 0)
    for(const entry in obj) {
      let regex = /(\d+)/g
      listOfArt.forEach(x => {
        if(x.startsWith(entry)) {
          obj[entry] = obj[entry] + Number(x.match(regex).join(''))
        }
      })
    }
    
    let result = []
    Object.entries(obj).forEach(x => result.push(`(${x[0]} : ${x[1]})`))
    return result.join(' - ')
}

//Top solution:
function stockList(listOfArt, listOfCat) {
    var qs = {};
    if (!listOfArt.length) return '';
  
    listOfArt.forEach(function(art) {
      var cat = art[0];
      qs[cat] = (qs[cat] | 0) + +art.split(' ')[1];
    });
  
    return listOfCat.map(function(c) {
      return '(' + c + ' : ' + (qs[c] | 0) + ')';  
    }).join(' - ');  
}