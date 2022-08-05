//my solution:
function high(x){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    const sentenceArr = x.split(' ')
    const wordScore = sentenceArr.map(x => x.split('').map(x => alphabet.indexOf(x)+1).reduce((acc, c) => acc + c, 0))
    const maxValueIndex = wordScore.findIndex(x => x === Math.max(...wordScore))
    
    return sentenceArr[maxValueIndex]
}