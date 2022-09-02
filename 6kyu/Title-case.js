//my solution:
function titleCase(title, minorWords) {
    let titleArr = title.toLowerCase().split(' ')
    let minorWordsArr
    
    if(minorWords) {
      minorWordsArr = minorWords.toLowerCase().split(' ')
      return titleArr.map((x,i) => {
       if(i === 0 || !minorWordsArr.includes(x)) {
         return x = x.slice(0, 1).toUpperCase() + x.slice(1)
       } else {
         return x
       }
      }).join(' ')
    } else {
      return titleArr.map(x => x.slice(0, 1).toUpperCase() + x.slice(1)).join(' ')
    }
}