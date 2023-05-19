function correctPolishLetters (string) {
    let alphObj = {
      ą : 'a',
      ć : 'c',
      ę : 'e',
      ł : 'l',
      ń : 'n',
      ó : 'o',
      ś : 's',
      ź : 'z',
      ż : 'z'
    }
      
    for(const key in alphObj) {
      if(string.includes(key)) {
        let regex = new RegExp(key, 'g')
        string = string.replace(regex, alphObj[key])
      }
    }
    
    return string
}