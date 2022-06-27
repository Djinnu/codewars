//my solution:
function alphabetPosition(text) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
     'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    let textArr = text.split('').map(x => x.toLowerCase())
    let filteredArr = textArr.filter(x => alphabet.includes(x))
    return filteredArr.map((x,i,arr) => arr[i].replace(x, alphabet.indexOf(x) + 1)).join(' ')
}



//better solution:
function alphabetPosition(text) {
    return text
      .toUpperCase()
      .match(/[a-z]/gi)
      .map( (c) => c.charCodeAt() - 64)
      .join(' ');
}