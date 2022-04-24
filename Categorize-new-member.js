//my first idea for this problem:

function openOrSenior(data) {
    let flatArr = data.flat()
    let output = []
    for(let i = 0; i < flatArr.length; i+=2) {
        if(flatArr[i] >= 55 && flatArr[i+1] > 7) {
            output.push('Senior')
        } else {
            output.push('Open')
        }
    }
    return output
}

//more efficient option :
//return data.map(([age, handicap]) => age >= 55 && handicap > 7 ? 'Senior' : 'Open' )