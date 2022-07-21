function anagrams(word, words) {
    let sortedArr = word.split('').sort().join('')
    return words.filter(x => x.split('').sort().join('') === sortedArr)
}