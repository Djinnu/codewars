//my first solution:
function isPangram(string){
    const alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
    let arr = []
    string.split('').map(x => {
        x = x.toLowerCase()
        if(!arr.includes(x) && alphabet.includes(x)) {
            arr.push(x)
        }
    })
    return arr.length === 26
}
//better solution: 
function isPangram(string) {
    const alphabetList = [...'abcdefghijklmnopqrstuvwxyz'];
  
    return alphabetList.every((letter) => string.toLowerCase().includes(letter));
}