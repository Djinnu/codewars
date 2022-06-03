function spinWords(string){
    return string.split(' ').map(x => x.length >= 5 ? [...x].reverse().join('') : x).join(' ')
}