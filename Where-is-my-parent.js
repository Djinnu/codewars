//My solution:
function findChildren(dancingBrigade) {
    return dancingBrigade.split('').sort((a,b) => a.localeCompare(b, 'en-US-u-kf-upper')).join('')
}
//Another interesting solution:
function findChildren(dancingBrigade){
    char = "";
    let arr = dancingBrigade.toLowerCase().split("").sort().map(item => {
      if(item != char) {
        char = item;
        return item.toUpperCase();
      }
      return item;
    }).join("");
  
    return arr;
  };